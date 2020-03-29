import { UiActionTypes } from './ui.types';

const UiContextReducer = (state, action) => {
	switch(action.type) {
		case UiActionTypes.TOGGLE_MODAL:
			return {
				...state,
				showModal: !state.showModal
			};
		case UiActionTypes.UPDATE_SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload
			};
		case UiActionTypes.UPDATE_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: action.payload
			}
		default: 
			return state;
	}
}

export default UiContextReducer;