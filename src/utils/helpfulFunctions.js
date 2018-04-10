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

export const generateUsers = () => {
  return ([
    {
      id: 1,
      first_name: "Steve",
      last_name: "Kekacs",
      age: 24,
      bio: "Ball is Life!"
    },
    {
      id: 2,
      first_name: "Ty",
      last_name: "Rocca",
      age: 23,
      bio: "Swimming is Life!"
    },
    {
      id: 3,
      first_name: "Manav",
      last_name: "Khandelwal",
      age: 21,
      bio: "All Sports are Life!"
    },
    
  ]);
}