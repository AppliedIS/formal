$(document).ready(function() {
    // Our code here

    // Test for placeholder support
    $.support.placeholder = (function() {
        let i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form li').each(function() {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form li').find('input, textarea').on('keyup blur input focus', function(e) {

            // Cache our selectors
            let $this = $(this),
                $parent = $this.parent();

            // Add or remove classes
            if (e.type == 'focus') {
                // keyup code here
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label');
                }
            } else if (e.type == 'blur') {
                // blur code here
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
        });
    }
});
