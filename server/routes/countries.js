const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	try {
		const apiRes = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
			method: 'GET',
			headers: {
				"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key": process.env.COUNTRIES_API_KEY
			}
		});
		const apiResData = await apiRes.json();
		apiResData.countries_stat.sort((a, b) => {
			const casesStringToInt = casesStr => parseInt(casesStr.split(',').join(''));
			return casesStringToInt(b.cases) - casesStringToInt(a.cases);
		});
		return res.send({ error: false, data: apiResData});
	} catch(e) {
		return res.send({ error: true, data: "Failed to retrieve countries." });
	}
	
});

module.exports = router;