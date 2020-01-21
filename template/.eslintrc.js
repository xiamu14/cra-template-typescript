// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: "@redchili/eslint-config-airbnb-typescript-prettier",
  rules: {
    "no-console": 0,
    camelcase: 2,
    "no-magic-numbers": 1,
    "react/destructuring-assignment": 1,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "import/prefer-default-export": "off",
  },
  "plugins": ["jest"],
  "env": {
    "jest": true
  }
};
