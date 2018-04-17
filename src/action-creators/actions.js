import moment from 'moment';
import * as types from './ActionTypes';

export function filterActivities(sports, levels) {
  return { type: types.FILTER_ACTIVITIES, sports, levels };
}

export function getUserInfo(userId) {
  return { type: types.GET_USER_INFO, userId };
}

export function hostGame(gameSettings) {
  const gameStart = moment(gameSettings.start);
  const gameEnd = gameStart.add(parseInt(gameSettings.duration), "m");
  return dispatch => dispatch({
    type: types.CREATE_GAME,
    data: {
      ...gameSettings,
    },
  });
}
