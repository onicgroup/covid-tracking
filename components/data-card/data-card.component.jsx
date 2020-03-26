import React from 'react';
import { Col, Card } from 'react-bootstrap';

const DataCard = ({ id, title, cases, onCardClick }) => {
	return (
		<Col
			xs={12} sm={9} md={4} 
			className="mb-2 mx-auto"
			onClick={onCardClick}
			style={{cursor: 'pointer'}}
		>
			<Card bg="light">
				<Card.Body>
					<Card.Title style={{color: '#454545'}}>
						<h5 style={{display: 'inline'}}>{id+1}. </h5>{title}
					</Card.Title>
					<Card.Subtitle style={{color: '#ae2525'}} className="mb-2 text-muted">
						<p style={{color: '#ae2525'}}>Cases: {cases}</p>
					</Card.Subtitle>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default DataCard;