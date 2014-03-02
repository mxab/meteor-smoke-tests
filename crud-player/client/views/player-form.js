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

/**
 * for only one specific one
 */
Template.playerForm.rendered = function () {
    $('.datepicker').datepicker({
        format: "yyyy-mm-dd"
    });
}
/**
 * for usage for all autoform and all datepicker. Move following code to lib
 */
/*
Template._autoForm.rendered = function () {
    $('input[type=date]').datepicker({
        format: "yyyy-mm-dd"
    });
}
*/
playerForm.hooks({
    after: {
        insert: function (operation, result, template) {
            Router.go("editPlayer", {_id: result});
        }
    }
});