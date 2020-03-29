import React, { useReducer } from 'react';
import DataContextReducer from './data.reducer';

const DataContext = React.createContext();

const DataContextProvider = props => {	

	const initialState = {
		countries: [],
		provinces: [],
		modalData: {
			title: '',
			cases: '',
			active: '',
			deaths: '',
			recovered: ''
		}
	}

	const [state, dispatch] = useReducer(DataContextReducer, initialState);

	return(
		<DataContext.Provider value={{ state, dispatch }}>
			{props.children}
		</DataContext.Provider>
	);
}

export { DataContext, DataContextProvider };