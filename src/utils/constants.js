import { Icon } from 'leaflet';
// TODO: @manav create a list of icons - probably need some sort of mapping to the sports - that
// should live in the ./constants.js file but rn this is an example
import basketballImg from '../images/basketball.png';
import soccerImg from '../images/soccer.ico';
import tennisImg from '../images/tennisball.png';
import footballImg from '../images/football.png';
import baseballImg from '../images/baseball.png';


// Skills
export const skillLevels = {
  // All: "all_levels",
  Beginner: "beginner",
  Intermediate: "intermediate",
  Advanced: "advanced",
};

export const filterToLevel = Object.entries(skillLevels).reduce(
  (acc, [name, slug]) => ({ [slug]: name, ...acc }),
  {},
);
export const levelsSlugs = [
  "beginner",
  "intermediate",
  "advanced",
];
export const levelsList = levelsSlugs.map(l => filterToLevel[l]);

export const sportsWithIcons = [
  "Baseball",
  "Basketball",
  //"Boxing",
  //"Cycling",
  //"Dartmouth",
  "Football",
  //"Golf",
  // "Hockey",
  "Soccer",
  // "Swimming",
  // "Table Tennis",
  "Tennis",
  // "Volleyball",
];
// Sports
export const sportToFilter = {
  // All: "all_sports",
  Baseball: "baseball",
  Basketball: "basketball",
  // Boxing: "boxing",
  // Cycling: "cycling",
  // Dartmouth: "dartmouth",
  Football: "football",
  // Golf: "golf",
  // Hockey: "hockey",
  Soccer: "soccer",
  // Swimming: "swimming",
  // "Table Tennis": "table_tennis",
  Tennis: "tennis",
  // Volleyball: "volleyball",
};

// TODO: CREATE SPORTS SLUGS
export const filterToSport = Object.entries(sportToFilter).reduce(
  (acc, [name, slug]) => ({ [slug]: name, ...acc }),
  {},
);
export const sportsList = Object.keys(sportToFilter).sort();
export const sportsSlugs = Object.values(sportToFilter).sort();

/**************************************************************************************************
 * Sport Mappings
 **************************************************************************************************/

// for each sport the following should be done
const basketballIcon = new Icon({
  iconUrl: basketballImg,
  iconSize: [20, 20], // size of the icon - think this is the pixel scaling
});

const soccerIcon = new Icon({
  iconUrl: soccerImg,
  iconSize: [20, 20],
});

const tennisIcon = new Icon({
  iconUrl: tennisImg,
  iconSize: [23, 23],
});

const footballIcon = new Icon({
  iconUrl: footballImg,
  iconSize: [20, 20],
});

const baseballIcon = new Icon({
  iconUrl: baseballImg,
  iconSize: [25, 25],
});

// then we want something like this so we can map sport id to
// the icons (should line up with our other files)
export const sportToIcon = {
  basketball: basketballIcon,
  soccer: soccerIcon,
  tennis: tennisIcon,
  football: footballIcon,
  baseball: baseballIcon,
};
