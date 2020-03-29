import React, { useContext } from 'react';
import { FormControl } from 'react-bootstrap';

import { UiContext } from '../../contexts/ui/ui.context';
import { updateSearchField } from '../../contexts/ui/ui.actions';

const SearchBar = () => {
	const { state: { searchField }, dispatch } = useContext(UiContext);
	const handleSearchField = e => {
		dispatch(updateSearchField(e.target.value));
	};
	return (
		<FormControl
			style={{opacity: 0.8}} 
			type="text" 
			value={searchField} 
			placeholder="Search" 
			onChange={handleSearchField}
		/>
	);
};

export default SearchBar;