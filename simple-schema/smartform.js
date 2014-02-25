
PersonSchema = new SimpleSchema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    }

});

if (Meteor.isClient) {


    Session.set("personValid", false);



    //takes the form and validates it
    var validatePerson = function ($form) {

        var obj = {
            firstName: $form.find("input[name=firstName]").val(),
            lastName: $form.find("input[name=lastName]").val()
        };
        PersonSchema.namedContext("person").validate(obj);
    };

    //validate once on rendered
    Template.personForm.rendered = function () {

        var $form = $(this.find("form"));
        validatePerson($form);

    };
    //validate on every input
    Template.personForm.events = {

        "input form": function (event, template) {
            var $form = $(template.find("form"));
            validatePerson($form);
        }
    };


    //helper to render the button
    Template.personForm.isPersonValid = function () {
        return Session.get("personValid")
    }
}

if (Meteor.isClient) {
    Meteor.startup(function () {
        Deps.autorun(function () {
            var context = PersonSchema.namedContext("person");

            Session.set("personValid", context.isValid())

        });
    });
}