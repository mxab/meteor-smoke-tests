Players = new Meteor.Collection("players", {
    schema: {
        firstName: {
            type: String,
            max: 20
        },
        lastName: {
            type: String
        },
        birthDay: {
            type: Date
        },
        description: {
            type: String
        },
        "descriptions.$.title": {
            type: String,
            optional: true
        },
        "descriptions.$.content": {
            type: String,
            optional: true
        }
    }
});

