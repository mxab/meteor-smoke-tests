Events = new Meteor.Collection("events", {
    schema: {
        start: {
            type: Date
        },
        end: {
            type: Date
        },
        userId: {
            type: String,
            optional: true
        },
        title: {
            type: String
        },
        summary: {
            type: String
        },
        description: {
            type: String,
            optional: true
        },
        location: {
            type: String,
            optional: true
        }
    }
});


Events.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        //return (userId && doc.owner === userId);

        // for testing true
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        //return doc.owner === userId;

        // for testing
        return true;
    },
    remove: function (userId, doc) {
        // can only remove your own documents
        return doc.owner === userId;

        // for testing
        return true;
    }

    //fetch: ['owner']
});

