Template.calendar.helpers({
    notEmpty: function(data) {
        return data.count() != 0;
    }
});
Template.calendar.created = function () {
    var instance = EasySearch.getComponentInstance(
        { id: "searchUpcomingEvents", index : 'events' }
    );

    instance.on('searchingDone', function (searchingIsDone) {
        searchingIsDone && console.log('I am done!');
        $('.collapsible').collapsible({
            accordion : true
        });
    });

};
Template.calendar.rendered=function() {
    $('.collapsible').collapsible({
        accordion : true
    });
};

//{ '$or': [ { location: 'Exter' }, { name: 'exter' }, { 'category.name': 'exter' } ],dateEvent: { '$gte': new Date() } }