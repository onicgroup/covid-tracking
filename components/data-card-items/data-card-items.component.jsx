import React from 'react';

import DataCard from '../data-card/data-card.component';
import { packageCountryData, packageProvinceData } from '../../utils';

const DataCardItems = ({ searchField, countries, provinces, onCardClick }) => {

	const showCard = name => name.toLowerCase().includes(searchField);

	return countries.length ? countries.map((country, id) => {
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
	}) : provinces.length ? provinces.map((data, id) => {
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
	}) : 'Please wait ...'
};

export default DataCardItems;