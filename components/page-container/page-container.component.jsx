import React from 'react';

import BackgroundImage from '../background-image/background-image.component';
import Header from '../header/header.component';

const PageContainer = ({ children }) => (
	<div>
		<BackgroundImage>
			<Header/>
			{children}
		</BackgroundImage>
	</div>
);

export default PageContainer;