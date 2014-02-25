Persons = new Meteor.Collection("persons", {
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
        }
    }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

if (Meteor.isClient) {

    Template.insertPersonForm.personCollection = function(){
        return Persons;
    }
    Template.editPersonForm.personCollection = function(){
        return Persons;
    }
    Template.persons.persons = function(){
        return Persons.find();
    }
    Template.persons.events = {
        "click .js-edit" : function(event, template) {

            Session.set("personId", this._id);
        }
    }

    Template.editPersonForm.person = function(){
        return Persons.findOne(Session.get("personId"));
    }
}