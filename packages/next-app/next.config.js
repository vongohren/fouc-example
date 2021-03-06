const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

module.exports = withPlugins([
  [withTM, {
    transpileModules: ['tsdx-styled-comps-lib', 'tsdx-emotion-comps-lib']
  }]
]);