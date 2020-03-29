import { UiActionTypes } from './ui.types';

export const toggleModal = () => ({
	type: UiActionTypes.TOGGLE_MODAL
});

export const updateSearchField = search => ({
	type: UiActionTypes.UPDATE_SEARCH_FIELD,
	payload: search
});