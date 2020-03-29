import React, { useContext } from 'react';
import Link from 'next/link';

import { Modal, Button } from 'react-bootstrap';
import { UiContext } from '../../contexts/ui/ui.context';
import { toggleModal } from '../../contexts/ui/ui.actions';
import { DataContext } from '../../contexts/data/data.context';

const DataModal = ({ showProvinceButton }) => {
	const { state: { showModal }, dispatch } = useContext(UiContext);
	const { state: { modalData: { title, cases, active, deaths, recovered } } } = useContext(DataContext);
	return (
		<Modal centered show={showModal} onHide={() => dispatch(toggleModal())} style={{color: 'black'}}>
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
						<Button variant="primary" onClick={() => dispatch(toggleModal())}>
							View Provinces/States
						</Button>
					</Link>
				}
				<Button variant="secondary" onClick={() => dispatch(toggleModal())}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DataModal;