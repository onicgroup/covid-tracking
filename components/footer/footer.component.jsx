import React from 'react';

import { Text } from './footer.styles';
import { FaHeart } from 'react-icons/fa';

const Footer = () => (
	<Text>
		Made with <FaHeart color="red"/> from the <a 
			style={{color: '#add8e6'}} 
			href="https://www.onicinc.com/"
			target="_blank"
		>Onic Group</a>, from a collective of social-distancing homes likely near you (but at least 6 feet apart).
		Submit an issue <a 
			style={{color: '#add8e6'}} 
			href="https://github.com/onicgroup/covid-tracking/issues" 
			target="_blank"
		>here</a>.
	</Text>
);

export default Footer;