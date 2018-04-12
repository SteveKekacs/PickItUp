import { createSelector } from 'reselect';

// function that makes making immutable selectors faster
const makeKeyedSelector = (parentSelector, key) => createSelector(
  parentSelector,
  state => state.get(key),
);

// if you have an immutable selector and just need to 'toJS' it this
// will do that for you - do the two step process
const fromImmutableSelector = parentSelector => createSelector(
  parentSelector,
  state => (state.toJS ? state.toJS() : state),
);

const getActivities = state => state.activities;
// const getUser = state => state.users;

// need this step if we to just to js something
const getImmutableSports = makeKeyedSelector(getActivities, 'selectedSports');
export const getSelectedSports = fromImmutableSelector(getImmutableSports);

const getImmutableLevels = makeKeyedSelector(getActivities, 'selectedLevels');
export const getSelectedLevels = fromImmutableSelector(getImmutableLevels);

const getImmutableActivities = makeKeyedSelector(getActivities, 'allActivities');
export const getAllActivities = fromImmutableSelector(getImmutableActivities);

const getImmutableVisibleActivities = makeKeyedSelector(
  getActivities,
  'visibleActivities',
);
export const getVisibleActivities = fromImmutableSelector(getImmutableVisibleActivities);

const getImmutablePastActivities = makeKeyedSelector(
  getActivities,
  'pastActivities',
);
export const getPastActivities = fromImmutableSelector(getImmutablePastActivities);

const getImmutableCurrentActivity = makeKeyedSelector(
  getActivities,
  'currentActivity',
);
export const getCurrentActivity = fromImmutableSelector(getImmutableCurrentActivity);

// Example of a simple selector
export const getCurrentActivityStatus = makeKeyedSelector(
  getActivities,
  'currentActivityStatus',
);


// Temp
// export getUser;
