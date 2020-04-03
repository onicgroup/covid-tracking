import React from 'react';
import Head from 'next/head';
import App from 'next/app';

import { DataContextProvider } from '../contexts/data/data.context';
import { UiContextProvider } from '../contexts/ui/ui.context';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	initialize() {
		if (process.env.NODE_ENV !== 'production') return;

		// ensures user is on https
		if (location.protocol !== 'https:') {
		 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
		}

		// google analytics
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-162440212-1');

		// hotjar tracking
		(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1753942,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<DataContextProvider>
				<UiContextProvider>
					<Head>
						<link rel="icon" href="/favicon.ico" />
						<link
							href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
							rel="stylesheet"
						/>
						<meta charset='utf-8' />
						<meta http-equiv='X-UA-Compatible' content='IE=edge' />
						<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
						<meta name='description' content='Description' />
						<meta name='keywords' content='Keywords' />

						<link rel="manifest" href="/manifest.json" />
						<link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
						<link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
						<link rel="apple-touch-icon" href="/icons/icon-512x512.png"></link>
						<meta name="theme-color" content="#317EFB"/>

						<meta property="og:title" content="COVID-19 Tracking: Up-To-Date COVID-19 cases. Updated every minute. "/>
						<meta property="og:type" content="website"/>
						<meta property="og:url" content="https://www.covidtracking.org/"/>
						<meta property="og:site_name" content="COVID-19 Tracking"/>
						<meta property="og:description" content="See updates for the world's COVID-19 cases in one simple view. Updated every minute."/>
						<meta property="og:image" content="https://i.imgur.com/ICqgEeG.png"/>

						<title>COVID-19 Tracking: Up-To-Date COVID-19 cases. Updated every minute.</title>
						<meta name="description" content="See updates for the world's COVID-19 cases in one simple view. Updated every minute."/>
						<meta name="author" content="The Onic Group"/>
						<meta property="og:title" content="COVID-19 Tracking: Up-To-Date COVID-19 cases. Updated every minute."/>
						<meta property="og:type" content="website"/>
						<meta property="og:url" content="https://www.covidtracking.org/"/>
						<meta property="og:site_name" content="COVID-19 Tracking"/>
						<meta property="og:description" content="See updates for the world's COVID-19 cases in one view."/>
						<meta property="og:image" content="https://i.imgur.com/ICqgEeG.png"/>

						<script async src="https://www.googletagmanager.com/gtag/js?id=UA-162440212-1"></script>
						<script> { process.browser && this.initialize() } </script>
					</Head>
					<Component {...pageProps} />
				</UiContextProvider>
			</DataContextProvider>
		);
	}
}

export default MyApp;