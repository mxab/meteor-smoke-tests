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
                Meteor.subscribe("players")
            ]
        },
        data: {

            players: Players.find()
        }

    });

    /**
     * new player route
     */
    this.route('newPlayer', {
        path: 'new-player'
    });

    /**
     * edit player route
     */
    this.route('editPlayer', {
        path: 'edit-player/:_id',
        waitOn: function () {
            return [
                Meteor.subscribe("player", this.params._id)
            ]
        },
        data: function () {
            return {
                player: Players.findOne({_id: this.params._id})
            }
        }
    });
});