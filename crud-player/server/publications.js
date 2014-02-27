Meteor.publish('players', function () {
    return Players.find();
});

Meteor.publish('player', function (id) {
    return Players.find({_id: id});
});