import { DataActionTypes } from './data.types';

const DataContextReducer = (state, action) => {
	switch(action.type) {
		case DataActionTypes.UPDATE_COUNTRIES:
			return {
				...state,
				countries: action.payload
			};
		case DataActionTypes.UPDATE_PROVINCES: 
			return {
				...state,
				provinces: action.payload
			};
		case DataActionTypes.UPDATE_MODAL_DATA:
			return {
				...state,
				modalData: action.payload
			};
		default: 
			return state;
	}
}

export default DataContextReducer;