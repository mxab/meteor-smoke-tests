/**
 * creates image format for the different storages
 * @type {*[]}
 */
var formats = [
    {w: 768, h: 768},
    {w: 300, h: 200},
    {w: 160, h: 120}

];

/**
 * create ImageStores based on cfs-gridfs / cfs-filesystem package
 *
 * @type {*|Array|IronRouter|849|182|143}
 */
var stores = _(formats).map(function (format) {
    return new FS.Store.FileSystem("images" + format.w + "x" + format.h, {
        path: "~/meteor_img/crud_player/images/" + format.w + "x" + format.h,

        beforeSave: function () {
            this.gm().resize(format.w, format.h).save();
        }
    });
});

/**
 * stores original image
 *
 * @type {FS.Store.FileSystem}
 */
var originalStore = new FS.Store.FileSystem("imagesOriginal", {
    path: "~/meteor_img/crud_player/images/original"
});

/**
 * merge of original and format based image file system storage
 */
stores.push(originalStore);

/**
 * create image collection
 * @type {FS.Collection}
 */
ImagesFS = new FS.Collection("images", {
    stores: stores,
    filter: {
        //maxSize: 1048576, //in bytes
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', "jpg", "jpeg", "gif"]
        }
    }
});

/**
 * configuration collection permission
 */
ImagesFS.allow({
    insert: function (userId, file) {
        return true;//userId && file.owner === userId;
    },
    update: function (userId, file, fields, modifier) {
        return userId && file.owner === userId;
    },
    remove: function (userId, file) {
        return userId && file.owner === userId;
    },
    download: function () {
        return true;
    }
});