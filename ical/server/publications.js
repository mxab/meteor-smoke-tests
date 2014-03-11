Meteor.publish('events', function () {
    return Events.find();
});

Meteor.publish('event', function (id) {
    return Events.find({_id: id})
})