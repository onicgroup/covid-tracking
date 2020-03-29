import React, { useState, useEffect, useContext } from 'react';

import ContentContainer from '../components/content-container/content-container.component';
import SearchBar from '../components/search-bar/search-bar.component';
import DataModal from '../components/data-modal/data-modal.component';
import PageContainer from '../components/page-container/page-container.component';
import DataCardItems from '../components/data-card-items/data-card-items.component';
import Footer from '../components/footer/footer.component';

import { DataContext } from '../contexts/data/data.context';
import { updateCountries, updateProvinces } from '../contexts/data/data.actions';
import { UiContext } from '../contexts/ui/ui.context';
import { updateSearchField, updateErrorMessage } from '../contexts/ui/ui.actions';
import { getCountriesApi, getProvincesByCountryApi } from '../api/covid';

const Home = ({ query }) => {
	const { dispatch: dataDispatch } = useContext(DataContext);
	const { dispatch: uiDispatch } = useContext(UiContext);
	
	const [lastUpdated, setLastUpdated] = useState(null);
	
	const getCountries = async () => {
		const { countries, takenAt } = await getCountriesApi();
		setLastUpdated(takenAt);
		dataDispatch(updateProvinces([])); // resolves an edge case
		dataDispatch(updateCountries(countries));
	};
	
	const getProvincesByCountry = async country => {
		const provinces = await getProvincesByCountryApi(country);
		if (!provinces.length) {
			uiDispatch(updateErrorMessage('Sorry, this information is not yet available.'));
		}
		dataDispatch(updateProvinces(provinces));
	}
	
	useEffect(() => {
		uiDispatch(updateSearchField(''));
		uiDispatch(updateErrorMessage(''));
		query.country ? getProvincesByCountry(query.country) : getCountries();
	}, [query])
	
	return (
		<PageContainer>
			<DataModal showProvinceButton={!query.country}/>
			<ContentContainer>
				<h1>{ query.country ? query.country : 'World Data'}</h1>
				<SearchBar />
				<h4 className="mt-3">Last Updated: {lastUpdated} EST</h4>
			</ContentContainer>
			<DataCardItems showProvinces={query.country}/>
			<Footer/>
		</PageContainer>
	);
};

Home.getInitialProps = ({query}) => {
  return {query}
}

export default Home;