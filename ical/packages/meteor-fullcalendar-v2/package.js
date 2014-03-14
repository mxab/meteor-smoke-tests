Package.describe({
    summary: "Fullcalendar in version 2 wrapped for Meteor"
});

Package.on_use(function (api) {
    api.use('jquery');
    api.use('moment');

    var mainFolder = 'bower_components/fullcalendar/build/out/';

    api.add_files([
        mainFolder + 'fullcalendar.css',
        mainFolder + 'fullcalendar.js',
    ], 'client');
});
