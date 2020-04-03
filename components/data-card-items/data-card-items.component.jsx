import React, { useContext } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';

import { CustomContainer } from './data-card-items.styles';
import DataCard from '../data-card/data-card.component';

import { DataContext } from '../../contexts/data/data.context';
import { updateModalData } from '../../contexts/data/data.actions';
import { UiContext } from '../../contexts/ui/ui.context';
import { toggleModal } from '../../contexts/ui/ui.actions';
import { packageCountryData, packageProvinceData } from '../../utils';

const DataCardItems = ({ showProvinces }) => {
	const { state: { countries, provinces }, dispatch: dataDispatch } = useContext(DataContext);
	const { state: { searchField, errorMessage }, dispatch: uiDispatch } = useContext(UiContext);

	const showCard = name => name.toLowerCase().includes(searchField.toLowerCase());

	const onCardClick = data => {
		dataDispatch(updateModalData(data));
		uiDispatch(toggleModal());
	};

	return(
		<CustomContainer className="mt-3">
			<Row>
				{
					!showProvinces && countries.length ? countries.map((country, id) => {
						const { country_name: countryName, cases } = country;
						if (showCard(countryName)) {
							return (
								<DataCard
									key={`${countryName}-country-card-${id}`}
									id={id}
									title={countryName}
									cases={cases}
									onCardClick={() => onCardClick(packageCountryData(country))}
								/>
							);
						}
					}) : showProvinces && provinces.length ? provinces.map((data, id) => {
						const { province, confirmed } = data;
						if (showCard(province)) {
							return (
								<DataCard
									key={`${province}-province-card-${id}`}
									id={id}
									title={province}
									cases={confirmed}
									onCardClick={() => onCardClick(packageProvinceData(data))}
								/>
							);
						}
					}) : errorMessage ? <h5 className="mx-auto">{errorMessage}</h5> 
					: <Spinner className="mx-auto" animation="grow" />
				}
			</Row>
		</CustomContainer>
	);

	
};

export default DataCardItems;