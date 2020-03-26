import React from 'react';

import image from '../../assets/images/background.png';
import { BackgroundDiv } from './background-image.styles';

const BackgroundImage = ({ children }) => {	
	return (
		<BackgroundDiv image={image}>
				{children}
		</BackgroundDiv>
	);
};

export default BackgroundImage;