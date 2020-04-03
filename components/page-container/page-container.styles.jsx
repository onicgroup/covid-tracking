import styled from 'styled-components';

export const BackgroundImage = styled('div')`
	background-position: center center;
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	color: white;
	text-align: center;
	overflow-x: hidden;
`;