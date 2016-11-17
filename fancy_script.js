$(document).ready(function(){
    // Our code here
    // Test for placeholder support
$.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();
// Hide labels by default if placeholders are supported
if($.support.placeholder) {
    $('.form li').each(function(){
        $(this).addClass('js-hide-label');
    });

    // Code for adding/removing classes here
}
});
