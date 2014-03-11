Package.describe({
    summary: "Write something meaningful here"
});

Package.on_use(function(api){

    api.export("ICAL");
    api.add_files(['ical_export.js'], 'server')
});
Npm.depends({'ical-generator': '0.1.5'});