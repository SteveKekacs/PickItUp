import * as types from '../action-types/FilterActions';

export function filterActivities(sports, levels) {
	console.log("FILTER THAT SHIT!!!!");
	console.log(sports, levels);
	return { type: types.FILTER_ACTIVITIES, sports, levels }
}