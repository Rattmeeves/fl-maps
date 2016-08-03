import { Events } from '/imports/api/events/events';

Meteor.methods({
  'Events.insert': function (params) {
    Events.insert(params);
  }
});
