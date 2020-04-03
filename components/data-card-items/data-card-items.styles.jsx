import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const CustomContainer = styled(Container)`
	overflow-y: scroll;
	height: 57vh;
	@media (max-width: 768px) {
		height: 70vh;
	}
`;