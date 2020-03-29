import React from 'react';

import { BackgroundImage } from './page-container.styles.jsx';
import Header from '../header/header.component';

import image from '../../assets/images/background.png';

const PageContainer = ({ children }) => (
	<BackgroundImage image={image}>
		<Header/>
		{children}
	</BackgroundImage>
);

export default PageContainer;