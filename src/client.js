/* global LoginPage, AccountsTemplates, FlowRouter */

const templateStr = `
<div class="container">
  <h2>{{label}}</h2>
  {{> atForm}}
  {{#if loggedin}}
    {{> atNavButton}}
  {{/if}}
</div>
`;

const navTemplateStr = `
<ul class="nav navbar-nav navbar-right">
  <li>{{> atNavButton}}</li>
</ul>
`;

LoginPage.config = function(config) {
  let t = Template[config.name];
  if (!t) {
    t = Template[config.name] = Template.fromString(templateStr);
    t.state = t.state || new ReactiveDict();
    t.helpers({
      label() {
        return t.state.get('label');
      },
      loggedin() {
        return !!Meteor.userId();
      }
    });
  }
  t.state.set('label', config.label);

  if (config.navTemplate && config.navTemplate.length === 1) {
    const {
      name,
      path
    } = config.navTemplate[0];
    let t = Template[name];
    if (!t) {
      t = Template[name] = Template.fromString(navTemplateStr);
      AccountsTemplates.linkClick = function(state) {
        if (state === 'signIn') {
          FlowRouter.go(path);
        }
      };
    }
  }

  if (config.accountsTemplateConfig &&
    config.accountsTemplateConfig.length === 1 &&
    !AccountsTemplates._initialized) {
    AccountsTemplates.configure(config.accountsTemplateConfig[0]);
  }
};
