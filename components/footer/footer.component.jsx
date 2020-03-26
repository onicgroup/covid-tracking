import React from 'react';

import { Text } from './footer.styles';
import { FaHeart } from 'react-icons/fa';

const Footer = () => (
	<Text>
		Made with <FaHeart color="red"/> from the Onic Group, from a collective of 
		social-distancing homes likely near you (but at least 6 feet apart).
	</Text>
);

export default Footer;