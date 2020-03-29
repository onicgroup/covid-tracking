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

	ensureHTTPS() {
		if (process.env.NODE_ENV === 'production' && location.protocol !== 'https:') {
		 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
		}
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<DataContextProvider>
				<UiContextProvider>
					<Head>
						<title>COVID-19 Tracking</title>
						<link rel="icon" href="/favicon.ico" />
						<link
							href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
							rel="stylesheet"
						/>
						<script> { process.browser && this.ensureHTTPS() } </script>
					</Head>
					<Component {...pageProps} />
				</UiContextProvider>
			</DataContextProvider>
		);
	}
}

export default MyApp;