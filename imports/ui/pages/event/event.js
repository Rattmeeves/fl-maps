import '/imports/ui/components/eventAbout/eventAbout.js';
import '/imports/ui/components/eventComments/eventComments.js';
import '/imports/ui/components/eventPhotos/eventPhotos.js';
import '/imports/ui/components/eventVideos/eventVideos.js';
import '/imports/ui/components/eventShowMoreButton/showMoreButton.js';

import './event.html';

Template.event.helpers({
    eventId: function () {
        var controller = Iron.controller();
        // reactively return the value of eventId
        return controller.state.get('eventId');
    }

});

Template.event.events({
    'click #go-back-btn': function() {
        history.back();
    }
});

Template.event.rendered = function() {
    var initializeTabs = function initializeTabs() {
        $('ul.tabs').tabs();
    };
    initializeTabs();
};
