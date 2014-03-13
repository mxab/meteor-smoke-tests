Package.describe({
    summary: "Datetimepicker on base of Bootstrap 3"
});

Package.on_use(function (api) {
    api.use('jquery');
    api.use('moment');

    api.add_files([
        'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css',
        'bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js',
        'bower_components/eonasdan-bootstrap-datetimepicker/src/js/locales/bootstrap-datetimepicker.de.js'
    ], 'client');
});
