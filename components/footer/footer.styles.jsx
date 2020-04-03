import styled from 'styled-components';

export const Text = styled('p')`
	position: absolute;
  bottom: 10px;
  width: 100%;
	font-size: 15px;
	@media (max-width: 768px) {
		font-size: 7.5px;
	}
`;