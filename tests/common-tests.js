/* global Tinytest, LoginPage */

Tinytest.add('config', (test) => {
  test.isNotUndefined(LoginPage.config);
});
