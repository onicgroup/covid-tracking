import React from 'react';
import Link from 'next/link';

import { Modal, Button } from 'react-bootstrap';

const DataModal = ({ show, handleClose, showProvinceButton, title, cases, active, deaths, recovered }) => (
	<Modal centered show={show} onHide={handleClose} style={{color: 'black'}}>
		<Modal.Header closeButton>
			<Modal.Title>{title}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<p>Total Cases: {cases}</p>
			<p>Active Cases: {active}</p>
			<p>Deaths: {deaths}</p>
			<p>Recovered: {recovered}</p>
		</Modal.Body>
		<Modal.Footer>
			{ showProvinceButton &&
				<Link href={`?country=${title}`}>
					<Button variant="primary" onClick={handleClose}>
						View Provinces/States
					</Button>
				</Link>
			}
			<Button variant="secondary" onClick={handleClose}>
				Close
			</Button>
		</Modal.Footer>
	</Modal>
);

DataModal.getInitialProps = ({query}) => {
  return {query}
}

export default DataModal;