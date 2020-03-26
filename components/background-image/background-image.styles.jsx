import styled from 'styled-components';

export const BackgroundDiv = styled('div')`
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props => props.image});
	height: 100vh;
	width: 100vw;
	color: white;
	text-align: center;
	padding-top: 13.5vh;
	@media (max-width: 768px) {
		padding-top: 16.5vh;
	}
	overflow-y: scroll;
`;