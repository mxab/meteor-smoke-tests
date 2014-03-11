# Installation Guide

Run following code for install the required packages:

    mrt add accounts-ui-bootstrap-3
    mrt add bootstrap3-less
    mrt add iron-router
    mrt add autoform
    mrt add collection2
    mrt add bootstrap-datepicker2

If there is a problem with collection2 add or remove collection2

    meteor add collection2

For fileupload add this lines into smart.json

    "collectionFS": {
        "git": "https://github.com/CollectionFS/Meteor-CollectionFS.git",
        "branch": "devel"
    },
    "cfs-gridfs": {
        "git": "https://github.com/CollectionFS/Meteor-cfs-gridfs.git",
        "branch": "master"
    },
    "cfs-filesystem": {
        "git": "https://github.com/CollectionFS/Meteor-cfs-filesystem.git",
        "branch": "master"
    },
    "cfs-handlebars": {
        "git": "https://github.com/CollectionFS/Meteor-cfs-handlebars.git",
        "branch": "shark"
    },
    "cfs-graphicsmagick": {
        "git": "https://github.com/CollectionFS/Meteor-cfs-graphicsmagick.git",
        "branch": "master"
    }

## Icon sources

Because most of the packages are using own fonts the public folder needs to get symlinked font folders. Be aware that tinymce
expects the fonts inside of public/fonts.

    // glyphicons
    @icon-font-path: "/font-glyphicons/"; // less file
    ln -s ../packages/bootstrap3-less/lib/fonts public/font-glyphicons // create symlink

    // tinymce
    ln -s ../packages/tinymce-jquery-meteor/tinymce/js/tinymce/skins/lightgray/fonts public/fonts

