import Immutable, { List } from 'immutable';
import * as actionTypes from '../action-creators/ActionTypes';
// import * as selectors from '../selectors';
import initialState from '../initialState';

// const initState = Immutable.fromJS(initialState);

const initActivities = Immutable.fromJS(initialState.activites);
const initUsers = Immutable.fromJS(initialState.users);

export function activities(state = initActivities, action) {
  switch (action.type) {
    case actionTypes.FILTER_ACTIVITIES:
      // set new sports and levels
      return state.set('selectedSports', List(action.sports))
        .set('selectedLevels', List(action.levels));

      // filter activities based on selectedSports and selectedLevels
      // return state.set('visibleActivities', state.get('allActivities').filter((activity) => {
      //   return (
      //     (action.sports.length === 0 || action.sports.includes(activity.get('sport'))) &&
      //     (action.levels.length === 0 || action.levels.includes(activity.get('level')))
      //   );
      // }));
    case actionTypes.CREATE_GAME:
      return state.setIn(
        ["allActivities", [action.data.id]],
        Immutable.fromJS(action.data),
      );
    default:
      return state;
  }
}

export function users(state = initUsers, action) {
  switch(action.type) {
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

      return state.setIn(['userInfo', 'pastActivities'], pastActivities)
        .setIn(['userInfo', 'friends'], friends)
        .setIn(['userInfo', 'rewards'], List([])); // TODO: Rewards
    default:
      return state;
  }
};
