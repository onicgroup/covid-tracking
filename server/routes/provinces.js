const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const { isNotValidProvince, constants } = require('../utils');

router.get('/', async (req, res) => {
	const { country } = req.query;
	const apiRes = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`, {
		method: 'GET',
		headers: {
			"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
			"x-rapidapi-key": process.env.PROVINCES_API_KEY
		}
	});
	const apiResData = await apiRes.json();

	if (apiResData.message === constants.COUNTRY_NOT_FOUND) {
		apiResData.data.covid19Stats = [];
	} else {
		const filteredProvinces = apiResData.data.covid19Stats.reduce((acc, data) => {
			if (isNotValidProvince(data.province)) {
				return acc;
			} else if (data.province in acc) {
				acc[data.province].confirmed += data.confirmed;
			} else {
				data.city = "";
				acc[data.province] = data;
			}
			return acc;
		}, {});

		apiResData.data.covid19Stats = Object.values(filteredProvinces);

		apiResData.data.covid19Stats.sort((a, b) => {
			return b.confirmed - a.confirmed;
		});
	}

	return res.send(apiResData);
});

module.exports = router;