import { DataActionTypes } from './data.types';

export const updateCountries = countries => ({
	type: DataActionTypes.UPDATE_COUNTRIES,
	payload: countries
})

export const updateProvinces = provinces => ({
	type: DataActionTypes.UPDATE_PROVINCES,
	payload: provinces
});

export const updateModalData = data => ({
	type: DataActionTypes.UPDATE_MODAL_DATA,
	payload: data
});