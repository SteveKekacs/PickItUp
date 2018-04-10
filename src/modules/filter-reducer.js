import Immutable, { List, Map } from 'immutable';
import * as actionTypes from '../action-types/FilterActions';
import initialState from '../initialState';

const init = Immutable.fromJS(initialState);

export default function filterActivities(state = init, action) {
    switch (action.type) {
        case actionTypes.FILTER_ACTIVITIES:
            // set new sports and levels
            state = state.set('selectedSports', List(action.sports))
                .set('selectedLevels', List(action.levels));
            
            // filter activities based on selectedSports and selectedLevels
            return state.set('visibleActivities', List(state.get('allActivities').toJS().filter((activity) => {
                return (
                    (action.sports.length === 0 || action.sports.includes(activity.sport)) &&
                    (action.levels.length === 0 || action.levels.includes(activity.level))
                );
            })));

        default:
            return state;
    }
}
