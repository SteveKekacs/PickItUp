import * as types from './ActionTypes';

export function filterActivities(sports, levels) {
  return { type: types.FILTER_ACTIVITIES, sports, levels };
}

export function getUserInfo(userId) {
  return { type: types.GET_USER_INFO, userId };
}

export function setCurrentGame(id) {
  return { type: types.SET_GAME, id };
}

export function hostGame(gameSettings) {
  return ({
    type: types.CREATE_GAME,
    data: { ...gameSettings },
  });
}
