import moment from "moment";

const initialState = {
  // the selected sports and levels that should appear on the map
  selectedSports: ["all"],
  selectedLevels: ["all"],
  
  // list of all activities currently going
  allActivites: [
    {
      name: "Steve's Game",
      playerIds: [1, 2],
      startTime: moment().hours(10).minutes(30),
      endTime: moment().hours(12),
      sport: "basketball",
      level: "intermediate"
    },
    {
      name: "John's Game",
      playerIds: [1, 2],
      startTime: moment().hours(15).minutes(30),
      endTime: moment().hours(17),
      sport: "football",
      level: "advanced"
    },
  ]
};

export default initialState;