import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import activities from './reducer';

export default combineReducers({
  routing: routerReducer,
  activities,
});
