MetaSchema = new SimpleSchema({
    ownerId: {
        type: String
    }
});

Events = new Meteor.Collection("events", {
    schema: {
        start: {
            type: String
        },
        end: {
            type: String
        },
        userId: {
            type: String,
            optional: true
        },
        title: {
            type: String
        },
        description: {
            type: String,
            optional: true
        },
        location: {
            type: String,
            optional: true
        },
        _meta: {
            type: MetaSchema,
            optional : true
        }
    }
});


Events.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        //return (userId && doc.ownerId === userId);

        // for testing true
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        //return doc.ownerId === userId;

        // for testing
        return true;
    },
    remove: function (userId, doc) {
        // can only remove your own documents
       // return doc.ownerId === userId;

        // for testing
        return true;
    }

    //fetch: ['owner']
});

