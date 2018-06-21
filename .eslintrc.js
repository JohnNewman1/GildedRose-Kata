module.exports = {
    "plugins": ["jasmine"],
    "extends": "airbnb-base",
    "env": {
      "jasmine": true
  },
    "rules": {
        "no-underscore-dangle": 0,
        "no-plusplus": ["error", {"allowForLoopAfterthoughts": true}],
        "class-methods-use-this": 0
    }
};
