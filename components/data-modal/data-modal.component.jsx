import React, { useContext } from 'react';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';

import PieChart from '../pie-chart/pie-chart.component';
import { UiContext } from '../../contexts/ui/ui.context';
import { toggleModal } from '../../contexts/ui/ui.actions';
import { DataContext } from '../../contexts/data/data.context';

import { constants } from '../../utils';

const DataModal = ({ showProvinceButton }) => {
	const { state: { showModal }, dispatch } = useContext(UiContext);
	const { state: { modalData: { title, ...pieData } } } = useContext(DataContext);
	return (
		<Modal centered show={showModal} onHide={() => dispatch(toggleModal())} style={{color: 'black'}}>
			<Modal.Header closeButton>
				<Modal.Title>{title}: {pieData.cases} total cases</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{height: '50vh'}}>
				<PieChart {...pieData}/>
			</Modal.Body>
			<Modal.Footer>
				{ showProvinceButton && constants.COUNTRIES_WITH_PROVINCE_DATA.includes(title) &&
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