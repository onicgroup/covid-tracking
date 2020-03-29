const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

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
	apiResData.data.covid19Stats.sort((a, b) => {
		return b.confirmed - a.confirmed;
	});
	return res.send(apiResData);
});

module.exports = router;