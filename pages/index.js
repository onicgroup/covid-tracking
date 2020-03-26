import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col, FormControl } from 'react-bootstrap';

import DataModal from '../components/data-modal/data-modal.component';
import PageContainer from '../components/page-container/page-container.component';
import DataCardItems from '../components/data-card-items/data-card-items.component';
import Footer from '../components/footer/footer.component';
import { getMostAffectedCountries, getProvinceCount } from '../api/covid';

const Home = ({ query }) => {
	const [searchField, setSearchField] = useState('');
	const handleSearchField = e => setSearchField(e.target.value);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	
	const [cardData, setCardData] = useState({});

	const [countries, setCountries] = useState([]);
	const [provinces, setProvinces] = useState([]);

	const [lastUpdated, setLastUpdated] = useState(null);

	const getMostAffected = async () => {
		const { countries_stat: data, statistic_taken_at: takenAt } = await getMostAffectedCountries();
		const date = new Date(takenAt);
		const updateDateTime = date.setHours(date.getHours() - 4);
		const updatedDate = new Date(updateDateTime);
		const dateList = updatedDate.toString().split(' ');
		setLastUpdated(`${dateList[1]} ${dateList[2]}, ${dateList[4]}`)
		setCountries(data);
	};

	const getCountryCount = async country => {
		const res = await getProvinceCount(country);
		let actualData;
		if (country !== 'USA') {
			actualData = res.filter(province => province.country === country && province.province !== country);
		} else {
			actualData = res;
		}
		setProvinces(actualData);
	}

	const onCardClick = data => {
		setCardData({ ...data })
		setShow(true);
	}

	useEffect(() => {
		if (query.country) {
			setCountries([]);
			getCountryCount(query.country);
		} else {
			setProvinces([]);
			getMostAffected();
		}
	}, [query])

	return (
		<PageContainer>
			<DataModal
				{...cardData}
				show={show}
				handleClose={handleClose}
				showProvinceButton={!query.country}
			/>
			<h1>{ query.country ? query.country : 'World Data'}</h1>
			<Row className="justify-content-center">
				<Col xs={10} sm={10} sm={9} md={6}>
					<FormControl
						style={{opacity: 0.8}} 
						type="text" 
						value={searchField} 
						placeholder="Search" 
						onChange={handleSearchField}
					/>
					<h4 className="mt-3">Last Updated: {lastUpdated} EST</h4>
				</Col>
			</Row>
			<Container className="mt-3 card-layout" style={{overflowY: 'scroll'}}>
				<Row>
					<DataCardItems 
						searchField={searchField} 
						countries={countries} 
						provinces={provinces} 
						onCardClick={onCardClick}
					/>
				</Row>
			</Container>
			<Footer/>
		</PageContainer>
	);
};

Home.getInitialProps = ({query}) => {
  return {query}
}

export default Home;