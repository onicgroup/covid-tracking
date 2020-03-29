const express = require('express');
const next = require('next');
const routes = require('../routes');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app
	.prepare()
	.then(() => {
  	const server = express();
  	server.use(bodyParser.json());

  	server.get('/api/countries', async (req, res) => {
  		const apiRes = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
				method: 'GET',
				headers: {
					"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
					"x-rapidapi-key": process.env.COUNTRIES_API_KEY
				}
			});
			const apiResData = await apiRes.json();
			return res.send(apiResData);
  	});

  	server.get(`/api/provinces`, async (req, res) => {
  		const { country } = req.query;
  		const apiRes = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`, {
				method: 'GET',
				headers: {
					"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
					"x-rapidapi-key": process.env.PROVINCES_API_KEY
				}
			});
			const apiResData = await apiRes.json();
			return res.send(apiResData);
  	});

  	server.get('*', (req, res) => {
			return handle(req, res);
		});

		const PORT = process.env.PORT || 3000;
		server.use(handle).listen(PORT, (err) => {
			if (err) throw err;
			console.log('READY ON PORT:', PORT)
		});
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	});