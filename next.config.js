const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPWA = require('next-pwa');

module.exports = withCSS(
	withImages(
		withPWA({
			pwa: {
				dest: 'public',
				disable: process.env.NODE_ENV !== "production"
			}
		})
	)
);