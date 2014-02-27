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
        cv: {
            type: String,
            optional : true
        }
    }
});

