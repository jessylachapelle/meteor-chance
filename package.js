/* eslint prefer-arrow-callback: 0 */
Package.describe({
  name: 'katimag33k:chance',
  summary: 'Meteor package for Chance - Random generator helper for JavaScript: http://chancejs.com',
  version: '1.0.0',
  git: 'https://github.com/katima-g33k/meteor-chance',
});

Npm.depends({
  chance: '1.0.0',
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.export('Chance');
  api.addFiles('.npm/package/node_modules/chance/chance.js', ['client']);
  api.addFiles('lib/chance.js', 'server');
});
