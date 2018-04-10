import * as actionTypes from '../action-types/FilterActions';
import initialState from '../initialState';

export default function filterActivities(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FILTER_ACTIVITIES:
			let newState = Object.assign({}, state);

			delete newState['selectedSports'];
			newState.selectedSports = action.sports;

			delete newState['selectedLevels'];
			newState.selectedLevels = action.levels;

			let visibleActivites = newState.allActivites;

			visibleActivites = visibleActivites.filter((activity) => {
				return (
					(action.sports.length === 0 || action.sports.includes(activity.sport)) &&
					(action.levels.length === 0 || action.levels.includes(activity.level))
				);
			});

			// filter activities based on selectedSports and selectedLevels
			return newState;

		default:
			return state;
	}
}
