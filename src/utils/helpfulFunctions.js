import moment from "moment";

/**************************************************************************************************
 * General Purpose functions
 *************************************************************************************************/

function dec2hex(dec) {
  return (`0${dec.toString(16)}`).substr(-2);
}
// generateId :: Integer -> String
export function generateId(len) {
  const arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => (
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ));
}


/**************************************************************************************************
 * Functions for making fake games
 *************************************************************************************************/

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min)) + min;
}

function makeRandomCoords() {
  // TODO: find a better bounding box
  const minLat = 42.370892;
  const maxLat = 42.3842314;
  const minLng = -71.1324698;
  const maxLng = -71.1066636;
  return {
    lng: getRandomArbitrary(minLng, maxLng),
    lat: getRandomArbitrary(minLat, maxLat),
  };
}

const pickRandomSport = () => 'basketball';

// THIS ONE SHOULD BE IMPROVED
export function makeRandomEvent() {
  // this should return
  const coords = makeRandomCoords();
  // TODO: implement
  const sport = pickRandomSport();
  return {
    sport,
    id: generateId(),
    position: [coords.lat, coords.lng],
    playerIds: [1, 2],
    playersNeeded: 8,
    creatorId: 1,
    startTime: moment().hours(10).minutes(30),
    endTime: moment().hours(12),
    level: "intermediate",
    name: "Placeholder's Game",
    ...coords,
  };
}


// TODO: fix this one
export const generateActivities = () => {
  // Should call make random event
  return ([
    makeRandomEvent(),
    makeRandomEvent(),
    makeRandomEvent(),
    makeRandomEvent(),
    makeRandomEvent(),
    makeRandomEvent(),
    makeRandomEvent(),
    makeRandomEvent(),
    makeRandomEvent(),
  ]);
};

export const generateUsers = () => {
  return ([
    {
      id: 1,
      first_name: "Steve",
      last_name: "Kekacs",
      age: 24,
      bio: "Ball is Life!",
      friendIds: [2, 3]
    },
    {
      id: 2,
      first_name: "Ty",
      last_name: "Rocca",
      age: 23,
      bio: "Swimming is Life!",
      friendIds: [1, 3]
    },
    {
      id: 3,
      first_name: "Manav",
      last_name: "Khandelwal",
      age: 21,
      bio: "All Sports are Life!",
      friendIds: [1, 2]
    },

  ]);
}
