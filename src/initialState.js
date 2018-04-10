import moment from "moment";

const initialState = {
  // the selected sports and levels that should appear on the map
  selectedSports: [],
  selectedLevels: [],
  
  // list of all activities currently going
  allActivities: [
    {
      name: "Steve's Game",
      playerIds: [1, 2],
      startTime: moment().hours(10).minutes(30),
      endTime: moment().hours(12),
      sport: "Basketball",
      level: "intermediate"
    },
    {
      name: "John's Game",
      playerIds: [1, 2],
      startTime: moment().hours(15).minutes(30),
      endTime: moment().hours(17),
      sport: "Football",
      level: "advanced"
    },
  ],

  // list of activites to show based on the selectedSports / selectedLevels
  visibleActivities: [
  ]
};

export default initialState;