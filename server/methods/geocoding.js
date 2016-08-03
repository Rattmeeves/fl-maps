function initializeGeocoding() {
    // TODO: Uncommnet lines for deployment. We need the settings.json file.
    // if (Meteor.settings['private'] == undefined) {
    //     throw new Meteor.Error('no-settings', "No configuration found. Did you forget to run meteor with --settings option?");
    // }
    // var apiKey = Meteor.settings['private'].google_api_key;
    return new GeoCoder({
        geocoderProvider: "google",
        httpAdapter: "https",
        // apiKey: apiKey
    });
}
geoCoder = initializeGeocoding();
Meteor.methods({
    'getCoords': function(address) {
        return geoCoder.geocode(address);
    }
});