module.exports = {
  "extends": "airbnb",
  "globals": {
    "window": true
  },
  "env": {
    "browser": true
  },
  "rules": {
    "quotes": 0,
    "radix": 0,
    "spaced-comment": 0,
    "react/forbid-prop-types": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [ "Link" ],
        "specialLink": [ "to", "hrefLeft", "hrefRight" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ]
      }
    ]
  }
};
