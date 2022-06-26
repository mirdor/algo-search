module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  globals: {
    zoom: "writable",
    posiQuick: "writable",
    zoomTxt: "writable",
    valoresPermisibles: "writable",
    list: "writable",
  },
};
