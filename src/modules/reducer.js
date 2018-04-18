import Immutable, { List } from 'immutable';
import * as actionTypes from '../action-creators/ActionTypes';
// import * as selectors from '../selectors';
import initialState from '../initialState';
import { randomNum } from '../utils/helpfulFunctions';

const initActivities = Immutable.fromJS(initialState.activites);
const initUsers = Immutable.fromJS(initialState.users);

export function activities(state = initActivities, action) {
  switch (action.type) {
    case actionTypes.FILTER_ACTIVITIES:
      // set new sports and levels
      return state.set('selectedSports', List(action.sports))
        .set('selectedLevels', List(action.levels));
    case actionTypes.CREATE_GAME:
      return state.setIn(
        ["allActivities", action.data.id],
        Immutable.fromJS(action.data),
      ).set("currentActivity", action.data.id);
    case actionTypes.SET_GAME:
      return state.set("currentActivity", action.id);
    default:
      return state;
  }
}

export function users(state = initUsers, action) {
  switch (action.type) {
    case actionTypes.GET_USER_INFO:
      // given a user id get all info, including activities
      const userId = parseInt(action.userId);

      // get basic user info
      state = state.set('userInfo', state.get('users').find((obj) => obj.get('id') === userId));

      // now get activities, friends and TODO: rewards
      const pastActivities = state.get('allActivities').filter((obj) => obj.get('playerIds').toJS().includes(userId));

      const friend_ids = state.get('users')
        .find((obj) => obj.get('id') === userId)
        .get('friendIds').toJS();

      const friends = state.get('users').filter((obj) => friend_ids.includes(obj.get('id')));

      // get rewards
      const rewards = List([]).set(0, state.getIn(['rewards', randomNum()]))
        .set(1, state.getIn(['rewards', randomNum()]))
        .set(2, state.getIn(['rewards', randomNum()]))
        .set(3, state.getIn(['rewards', randomNum()]))

      return state.setIn(['userInfo', 'pastActivities'], pastActivities)
        .setIn(['userInfo', 'friends'], friends)
        .setIn(['userInfo', 'rewards'], rewards);
    default:
      return state;
  }
};
