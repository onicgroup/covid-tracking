import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ResponsiveWrapper } from './content-container.styles';

const ContentContainer = ({ children }) => (
	<ResponsiveWrapper>
		<Row className="justify-content-center">
			<Col xs={10} sm={10} sm={9} md={6}>
				{children}
			</Col>
		</Row>
	</ResponsiveWrapper>
);

export default ContentContainer;