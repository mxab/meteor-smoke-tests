Package.describe({
    summary: "tinymce jquery meteor package"
});

Package.on_use(function (api) {


    api.use(['jquery']);
    api.add_files([
        'tinymce/js/tinymce/tinymce.min.js',
        'tinymce/js/tinymce/jquery.tinymce.min.js',
        'tinymce/js/tinymce/themes/modern/theme.min.js',


    ], 'client');

    var plugins = [
        'tinymce/js/tinymce/plugins/advlist/plugin.min.js',
        'tinymce/js/tinymce/plugins/anchor/plugin.min.js',
        'tinymce/js/tinymce/plugins/autolink/plugin.min.js',
        'tinymce/js/tinymce/plugins/autoresize/plugin.min.js',
        'tinymce/js/tinymce/plugins/autosave/plugin.min.js',
        'tinymce/js/tinymce/plugins/bbcode/plugin.min.js',
        'tinymce/js/tinymce/plugins/charmap/plugin.min.js',
        'tinymce/js/tinymce/plugins/code/plugin.min.js',
        'tinymce/js/tinymce/plugins/contextmenu/plugin.min.js',
        'tinymce/js/tinymce/plugins/directionality/plugin.min.js',
        'tinymce/js/tinymce/plugins/emoticons/plugin.min.js',
        'tinymce/js/tinymce/plugins/example/plugin.min.js',
        'tinymce/js/tinymce/plugins/example_dependency/plugin.min.js',
        'tinymce/js/tinymce/plugins/fullpage/plugin.min.js',
        'tinymce/js/tinymce/plugins/fullscreen/plugin.min.js',
        'tinymce/js/tinymce/plugins/hr/plugin.min.js',
        'tinymce/js/tinymce/plugins/image/plugin.min.js',
        'tinymce/js/tinymce/plugins/importcss/plugin.min.js',
        'tinymce/js/tinymce/plugins/insertdatetime/plugin.min.js',
        'tinymce/js/tinymce/plugins/layer/plugin.min.js',
        'tinymce/js/tinymce/plugins/legacyoutput/plugin.min.js',
        'tinymce/js/tinymce/plugins/link/plugin.min.js',
        'tinymce/js/tinymce/plugins/lists/plugin.min.js',
        'tinymce/js/tinymce/plugins/media/plugin.min.js',
        'tinymce/js/tinymce/plugins/nonbreaking/plugin.min.js',
        'tinymce/js/tinymce/plugins/noneditable/plugin.min.js',
        'tinymce/js/tinymce/plugins/pagebreak/plugin.min.js',
        'tinymce/js/tinymce/plugins/paste/plugin.min.js',
        'tinymce/js/tinymce/plugins/preview/plugin.min.js',
        'tinymce/js/tinymce/plugins/print/plugin.min.js',
        'tinymce/js/tinymce/plugins/save/plugin.min.js',
        'tinymce/js/tinymce/plugins/searchreplace/plugin.min.js',
        'tinymce/js/tinymce/plugins/spellchecker/plugin.min.js',
        'tinymce/js/tinymce/plugins/tabfocus/plugin.min.js',
        'tinymce/js/tinymce/plugins/table/plugin.min.js',
        'tinymce/js/tinymce/plugins/template/plugin.min.js',
        'tinymce/js/tinymce/plugins/textcolor/plugin.min.js',
        'tinymce/js/tinymce/plugins/visualblocks/plugin.min.js',
        'tinymce/js/tinymce/plugins/visualchars/plugin.min.js',
        'tinymce/js/tinymce/plugins/wordcount/plugin.min.js']

    api.add_files(plugins, 'client');


    var skin = [
        'tinymce/js/tinymce/skins/lightgray/content.min.css',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce-small.eot',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce-small.svg',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce-small.ttf',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce-small.woff',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce.eot',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce.svg',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce.ttf',
        'tinymce/js/tinymce/skins/lightgray/fonts/tinymce.woff',
        'tinymce/js/tinymce/skins/lightgray/img/anchor.gif',
        'tinymce/js/tinymce/skins/lightgray/img/loader.gif',
        'tinymce/js/tinymce/skins/lightgray/img/object.gif',
        'tinymce/js/tinymce/skins/lightgray/img/trans.gif',
        'tinymce/js/tinymce/skins/lightgray/skin.min.css'
    ];

    api.add_files(skin, 'client');
});




