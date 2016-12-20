//when the user clicks off of the zip field:
$(document).ready(function() {
    let removeSuccess;
    removeSuccess = function() {
        return $('.button').removeClass('success');
    };
    $(document).ready(function() {
        return $('.button').click(function() {
            $(this).addClass('success');
            return setTimeout(removeSuccess, 3000);
        });
    });
}.call(this));
//# sourceURL=pen.js
