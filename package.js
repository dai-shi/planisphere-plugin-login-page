Package.describe({
  name: 'daishi:planisphere-plugin-login-page',
  version: '0.0.2',
  summary: 'Login page plugin for Planisphere (used with MainLayout)',
  git: 'https://github.com/dai-shi/planisphere-plugin-login-page',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'templating', 'reactive-dict']);
  api.use('aldeed:simple-schema@1.1.0');
  api.use('numtel:template-from-string@0.1.0');
  api.use('useraccounts:bootstrap@1.13.1');
  api.use('kadira:flow-router@2.10.0');
  api.use('daishi:planisphere-core@0.1.0');
  api.addFiles(['src/common.js']);
  api.addFiles(['src/client.js'], 'client');
  api.export('LoginPage');
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'templating', 'reactive-dict']);
  api.use('tinytest');
  api.use('accounts-password');
  api.use('daishi:planisphere-plugin-login-page');
  api.addFiles(['tests/common-tests.js']);
});
