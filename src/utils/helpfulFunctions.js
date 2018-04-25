import moment from "moment";
import { sportsSlugs, filterToSport } from "./constants";

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

// Function to generate random num between 0 and upper param (exlcusive)
export const randomNum = (upper = 10) => Math.round((Math.random() * upper) + 0.5) - 1;

// Function to generate random string
const randomString = length => (
  Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1)
);


/**************************************************************************************************
 * Functions for making fake games
 *************************************************************************************************/

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min)) + min;
}

export function makeRandomCoords() {
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

// TODO: implement
const pickRandomSport = lst => lst[Math.floor(Math.random() * lst.length)];

export const generateFakeUsers = () => ([
  {
    id: 0,
    first_name: "Steve",
    last_name: "Kekacs",
    age: 24,
    bio: "Ball is Life!",
    friendIds: [1, 2],
  },
  {
    id: 1,
    first_name: "Ty",
    last_name: "Rocca",
    age: 23,
    bio: "Swimming is Life! I love meeting new people and learning new sports.",
    friendIds: [0, 2, 3, 5, 7, 9],
  },
  {
    id: 2,
    first_name: "Manav",
    last_name: "Khandelwal",
    age: 21,
    bio: "All Sports are Life!",
    friendIds: [0, 1],
  },
  {
    id: 3,
    first_name: "Evan",
    last_name: "Zheng",
    age: 40,
    bio: "I'm a doctor looking to get back into sports",
    friendIds: [1, 4],
  },
  {
    id: 4,
    first_name: "Craig",
    last_name: "Robertson",
    age: 33,
    bio: "I'm a serious baseball player. I love the Red Sox.",
    friendIds: [3, 8, 9],
  },
  {
    id: 5,
    first_name: "Tom",
    last_name: "Brady",
    age: 42,
    bio: "I'm a serious baseball player. I love the Red Sox.",
    friendIds: [1, 6, 3, 2],
  },
  {
    id: 6,
    first_name: "Peter",
    last_name: "Parker",
    age: 65,
    bio: "I'm just your average everyday sports lover.",
    friendIds: [2, 3, 5, 1],
  },
  {
    id: 7,
    first_name: "Jane",
    last_name: "Goodall",
    age: 57,
    bio: "I'm a biologist who loves boxing and winning table tennis.",
    friendIds: [5, 6, 0],
  },
  {
    id: 8,
    first_name: "Sarah",
    last_name: "William",
    age: 29,
    bio: "I'm Sarah and I love to play soccer. I love meeting new people.",
    friendIds: [3, 7, 2],
  },
  {
    id: 9,
    first_name: "Shae",
    last_name: "Jones",
    age: 36,
    bio: "I played tennis in college and I'm now looking for people to play with. I also love football!",
    friendIds: [0, 4, 8, 6],
  },
]);

export const generateRewards = () => ([
  {
    title: "SweetGrean",
    description: "10% Off Any Item",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "JambaJuice",
    description: "Buy One Get One Free",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "Veggie Galaxy",
    description: "5$ Coupon",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "V02 Vegan Caffe",
    description: "10% Off Any Item",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "GloboGym",
    description: "1 Free Month",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "Clover",
    description: "50% Off Any Drink",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "Gold's Gym",
    description: "25% Off 1 Year Subscription",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "ShakeWeight",
    description: "Buy One Get One Free",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "Leafly",
    description: "25% Off Any Strain",
    code: randomString(10).toUpperCase(),
  },
  {
    title: "Subway",
    description: "3$ Off Any Flatbread",
    code: randomString(10).toUpperCase(),
  },
]);

export function getFakeUser() {
  const users = generateFakeUsers();
  return users[randomNum(users.length)];
}

// THIS ONE SHOULD BE IMPROVED
export function makeRandomEvent() {
  // this should return
  const coords = makeRandomCoords();
  // TODO: implement
  const users = generateFakeUsers();
  const sport = pickRandomSport(sportsSlugs);
  const playersNeeded = randomNum(users.length) + 1;
  const numInGame = randomNum(playersNeeded);
  const fakeCreator = getFakeUser();

  // make a slew of fake players
  let fakePlayerIds = [fakeCreator.id];
  while (fakePlayerIds.length < numInGame) {
    const { id } = getFakeUser();
    if (!fakePlayerIds.includes(id)) {
      fakePlayerIds = fakePlayerIds.concat(id);
    }
  }

  // Make it pick random sports
  // make it pick random players
  // make it pick a random host
  return {
    sport,
    id: generateId(),
    position: [coords.lat, coords.lng],
    playerIds: fakePlayerIds,
    playersNeeded: 8,
    creatorId: fakeCreator.id,
    startTime: moment().hours(10).minutes(30),
    endTime: moment().hours(12),
    publicGame: true,
    duration: 45,
    level: "intermediate",
    name: `${filterToSport[sport]} with ${toTitleCase(fakeCreator.first_name)}`,
    ...coords,
  };
}

export const generateActivities = () => ([
  makeRandomEvent(),
  makeRandomEvent(),
  makeRandomEvent(),
  makeRandomEvent(),
  makeRandomEvent(),
  makeRandomEvent(),
  makeRandomEvent(),
  makeRandomEvent(),
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

