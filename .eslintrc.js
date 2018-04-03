module.exports = {
  "extends": "airbnb",
  "globals": {
    "window": true
  },
  "env": {
    "browser": true
  },
  "rules": {
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
