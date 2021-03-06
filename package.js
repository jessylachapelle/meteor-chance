/* eslint prefer-arrow-callback: 0 */
Package.describe({
  name: 'jlachapelle:chance',
  summary: 'Meteor package for Chance - Random generator helper for JavaScript: http://chancejs.com',
  version: '1.0.0',
  git: 'https://github.com/katima-g33k/meteor-chance',
});

Npm.depends({
  chance: '1.0.0',
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.addFiles([
    '.npm/package/node_modules/chance/chance.js',
  ], ['client']);

  api.addFiles([
    'lib/chance.js',
  ], ['client', 'server']);

  api.export([
    'chance',
  ], ['client', 'server']);
});
