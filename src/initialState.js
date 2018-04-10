import { generateActivities } from './utils/helpfulFunctions'


const initialState = {
  // the selected sports and levels that should appear on the map
  selectedSports: [],
  selectedLevels: [],
  
  // list of all activities currently going
  allActivities: generateActivities(),

  // list of activites to show based on the selectedSports / selectedLevels
  visibleActivities: [],

  // list of past activities to show
  pastActivities: [],

  // if joining/in middle of/in post game currentActivity 
  // will be set with activity Info
  currentActivity: {},
  // currentActivityStatus: joining/participating/ended
  currentActivityStatus: null,
};

export default initialState;