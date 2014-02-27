var playerForm = new AutoForm(Players);

Template.playerForm.helpers({
    /**
     *
     * @returns {AutoForm}
     */
    playerSchema: function () {
        return playerForm;
    },
    /**
     * Hopefully gets better in the future
     *
     * @returns {string}
     */
    actionType: function () {
        return Router.current().data().player ? 'update' : 'insert';
    }
});

Template.playerForm.rendered = function() {
    $('.datepicker').datepicker();
}

playerForm.hooks({
    onSuccess: function (operation, result, template) {
        Router.go("editPlayer", {_id: result});
    }
});