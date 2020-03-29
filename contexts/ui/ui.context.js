import React, { useReducer } from 'react';
import UiContextReducer from './ui.reducer';

const UiContext = React.createContext();

const UiContextProvider = props => {	

	const initialState = {
		showModal: false,
		searchField: '',
		errorMessage: ''
	}

	const [state, dispatch] = useReducer(UiContextReducer, initialState);

	return(
		<UiContext.Provider value={{ state, dispatch }}>
			{props.children}
		</UiContext.Provider>
	);
}

export { UiContext, UiContextProvider };