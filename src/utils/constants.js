import { Icon } from 'leaflet';
// TODO: @manav create a list of icons - probably need some sort of mapping to the sports - that
// should live in the ./constants.js file but rn this is an example
import basketballImg from '../images/basketball.png';

export const sportsList = [
  "Baseball",
  "Basketball",
  "Boxing",
  "Cycling",
  "Darthmouth",
  "Football",
  "Golf",
  "Hockey",
  "Soccer",
  "Swimming",
  "Table Tennis",
  "Tennis",
  "Volleyball",
];

export const levelsList = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const sportToFilter = {
  All: "all_sports",
  Baseball: "baseball",
  Basketball: "basketball",
  Boxing: "boxing",
  Cycling: "cycling",
  Darthmouth: "darthmouth",
  Football: "football",
  Golf: "golf",
  Hockey: "hockey",
  Soccer: "soccer",
  Swimming: "swimming",
  "Table Tennis": "table_tennis",
  Tennis: "tennis",
  Volleyball: "volleyball",
};

export const skillLevels = {
  All: "all_levels",
  Beginner: "beginner",
  Intermediate: "intermediate",
  Advanced: "advanced",
};

/**************************************************************************************************
 * Sport Mappings
 **************************************************************************************************/

// for each sport the following should be done
const basketballIcon = new Icon({
  iconUrl: basketballImg,
  iconSize: [20, 20], // size of the icon - think this is the pixel scaling
});

// then we want something like this so we can map sport id to
// the icons (should line up with our other files)
export const sportToIcon = {
  basketball: basketballIcon,
};
