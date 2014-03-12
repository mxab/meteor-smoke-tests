Package.describe({
    summary: "Datetimepicker on base of Bootstrap 3"
});

Package.on_use(function (api) {
    api.use('jquery');
    api.use('moment');

    api.add_files([
        'vendor/build/css/bootstrap-datetimepicker.css',
        'vendor/src/js/bootstrap-datetimepicker.js',
        'vendor/src/js/locales/bootstrap-datetimepicker.de.js'
    ], 'client');
});
