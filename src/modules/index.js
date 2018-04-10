import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { activities, users } from './reducer';

export default combineReducers({
  routing: routerReducer,
  activities,
  users
});
