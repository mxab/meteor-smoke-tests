var eventForm = new AutoForm(Events);

Template.eventForm.helpers({
    /**
     *
     * @returns {AutoForm}
     */
    eventSchema: function () {
        return eventForm;
    }
});


Template._autoForm.rendered = function () {

    $('input[type=date]').datepicker({
        format: "yyyy-mm-dd"
    });

};

/**
 * Hook for routing to edit event after insertion
 */
eventForm.hooks({

    after: {
        insert: function (operation, result, template) {
            console.log(result);
            Router.go("eventForm", {_id: result});
        }
    }
});