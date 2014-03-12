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

    $('.datetime').datetimepicker({
        language: "de"
    });

    $(".fromDatetime").on("dp.change",function (e) {
        $('.toDatetime').data("DateTimePicker").setMinDate(e.date);
    });
    $(".toDatetime").on("dp.change",function (e) {
        $('.fromDatetime').data("DateTimePicker").setMaxDate(e.date);
    });


};

/**
 * Hook for routing to edit event after insertion
 */
eventForm.hooks({
    before: {
        insert: function (doc) {

            doc._meta = {
                ownerId: Meteor.userId()
            };
            return doc;
        }
    },

    after: {
        insert: function (operation, result, template) {
            if (result) {
                Router.go("eventForm", {_id: result});
            }
        }
    },
    onError: function (operation, error, template) {

        console.log(arguments);
    }
});