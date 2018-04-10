import * as types from './ActionTypes';

export function filterActivities(sports, levels) {
    return { type: types.FILTER_ACTIVITIES, sports, levels }
}

export function getUserInfo(userId) {
    return { type: types.GET_USER_INFO, userId }
}