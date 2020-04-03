import styled from 'styled-components';

export const Text = styled('div')`
	font-size: 15px;
	height: 10vh;
	display: table-cell;
	width: 100vw;
  vertical-align: middle;
  margin: 0 auto;
	@media (max-width: 768px) {
		font-size: 10px;
	}
`;