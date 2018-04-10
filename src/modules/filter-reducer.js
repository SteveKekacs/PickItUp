import * as actionTypes from '../action-types/FilterActions';
import initialState from '../initialState';

export default function filterActivities(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FILTER_ACTIVITIES:
			console.log("FILTER ACTIVITIES REDUCER");
			console.log(state.allActivities);
			// filter activities based on selectedSports and selectedLevels
			return state;

		default:
			return state;
	}
}
