
///show/hide container
$(document).ready(function () {
    
    $("a.dropdown-link").click(function (e) {
        e.preventDefault();
        var $div = $(this).next('.dropdown-container');
        var $icon = $(this).children('.icons').first();

        $(".dropdown-container").not($div).hide();
        $(".icons").not($icon).text('+');
        if ($div.is(":visible")) {
            $div.hide();
            $icon.text('+');
        } else {
            $div.show();
            $icon.text('-');
        }
    });
});