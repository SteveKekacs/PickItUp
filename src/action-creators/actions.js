import * as types from './ActionTypes';

export function filterActivities(sports, levels) {
    return { type: types.FILTER_ACTIVITIES, sports, levels }
}