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
     * LabelValues for the select field
     *
     * @returns {*[]}
     */
    descriptionTitleSelect: function () {
        return [
            {label: "Description", value: 1},
            {label: "Variation", value: 2},
            {label: "Something else", value: 3}
        ];
    }
});

/**
 * for only one specific one
 */
Template.playerForm.rendered = function () {

    /**
     * datepicker package
     */
    $('.datepicker').datepicker({
        format: "yyyy-mm-dd"
    });

    /**
     * tinymce setup
     */
    $('.tinymce').tinymce({
        height: 250,
        theme: "modern",
        menubar: false,
        statusbar: false,
        style_formats: [
            {title: 'Header 1', block: 'h1'},
            {title: 'Header 2', block: 'h2'},
            {title: 'Header 3', block: 'h3'},
            {title: 'Header 4', block: 'h4'},
            {title: 'Header 5', block: 'h5'},
            {title: 'Header 6', block: 'h6'}
        ],
        paste_as_text: true,
        relative_urls: false,
        convert_urls: false,
        plugins: ['autolink link paste'],
        browser_spellcheck: true,
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat',

        setup: function (editor) {
            editor.on('blur', function (e) {
                tinyMCE.triggerSave();
                //this.trigger("change");
            });
        }

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