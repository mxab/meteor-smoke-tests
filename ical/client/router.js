Router.configure({
        layoutTemplate: 'layout'
    }
);

Router.map(function () {

    /**
     * home and list route
     */
    this.route('home', {
        path: '/',
        template: 'home',
        waitOn: function () {
            return [
                Meteor.subscribe("events")
            ]
        },
        data: function () {
            return {
                eventList: Events.find()
            }
        }

    });

    /**
     * new player route
     */
    this.route('eventNew', {
        path: 'event-new'
    });

    /**
     * edit player route
     */
    this.route('eventForm', {
        path: 'edit-event/:_id',
        waitOn: function () {
            return [
                Meteor.subscribe("event", this.params._id)
            ]
        },
        data: function () {
            return {
                event: Events.findOne({_id: this.params._id})
            }
        }
    });
});