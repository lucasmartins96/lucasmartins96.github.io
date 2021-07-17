// source: https://stackoverflow.com/questions/59877045/next-js-import-image-error-module-parse-failed-unexpected-character-10
const withImages = require('next-images');

module.exports = {
  ...withImages(),
  future: {
    webpack5: true,
  }
};
