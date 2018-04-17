import { generateActivities, generateUsers } from './utils/helpfulFunctions'


const allActivities = generateActivities();
// const activityLookup = allActivities.reduce(
//   (acc, activity) => ({ [activity.id]: activity, ...acc }),
//   allActivities,
// );

const initialState = {
  activites: {
    // the selected sports and levels that should appear on the map
    selectedSports: [],
    selectedLevels: [],

    // list of all activities currently going on
    // allActivities,
    allActivities: allActivities.reduce(
      (acc, a) => ({ [a.id]: a, ...acc }),
      {},
    ),

    // list of activites to show based on the selectedSports / selectedLevels
    // visibleActivities: allActivities,

    // will be set with activity Info
    currentActivity: {},

    // currentActivityStatus: joining/participating/ended
    currentActivityStatus: null,
  },
  users: {

    // list of all users on app
    users: generateUsers(),

    // id of user on app
    currentUserId: 1,

    // user info for profile page
    userInfo: {
      friends: [],
      rewards: [],
      pastActivities: [],
    },
  },
};

export default initialState;
