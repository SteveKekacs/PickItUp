import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import filterActivities from './reducer';

export default combineReducers({
  routing: routerReducer,
  filterActivities
});
