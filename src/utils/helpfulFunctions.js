import moment from "moment";

export const generateActivities = () => {
  return ([
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
  ]);
}
