import '/imports/ui/components/header/_header.js';
import '/imports/ui/components/footer/_footer.js';

import './appLayout.html';

Meteor.startup(function() {
  AutoForm.setDefaultTemplate('materialize');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });
});
