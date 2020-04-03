const express = require('express');
const next = require('next');
const routes = require('../routes');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const countriesRoutes = require('./routes/countries')
const provincesRoutes = require('./routes/provinces');

app
	.prepare()
	.then(() => {
  	const server = express();
  	server.use(bodyParser.json());
 		
  	server.use('/api/countries', countriesRoutes);
  	server.use('/api/provinces', provincesRoutes);

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