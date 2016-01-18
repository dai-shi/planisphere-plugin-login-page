/* global LoginPage:true, SimpleSchema */

LoginPage = LoginPage || {};
LoginPage.config = function() {};

if (Package['daishi:planisphere-core']) {
  const Planisphere = Package['daishi:planisphere-core'].Planisphere;
  Planisphere.registerPlugin({
    name: 'login-page',
    description: 'provides login page for main layout',
    configMethod: 'LoginPage.config',
    configSchema: new SimpleSchema({
      name: {
        type: String
      },
      label: {
        type: String
      },
      navTemplate: {
        optional: true,
        minCount: 0,
        maxCount: 1,
        autoform: {
          initialCount: 0
        },
        type: [new SimpleSchema({
          name: {
            type: String
          },
          path: {
            type: String
          }
        })]
      },
      accountsTemplateConfig: {
        optional: true,
        minCount: 0,
        maxCount: 1,
        autoform: {
          initialCount: 0
        },
        type: [new SimpleSchema({
          confirmPassword: {
            type: Boolean
          },
          enablePasswordChange: {
            type: Boolean
          },
          forbidClientAccountCreation: {
            type: Boolean
          },
          overrideLoginErrors: {
            type: Boolean
          },
          sendVerificationEmail: {
            type: Boolean
          },
          lowercaseUsername: {
            type: Boolean
          },
          focusFirstInput: {
            type: Boolean
          }
        })]
      }
    })
  });
}
