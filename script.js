
var typed = new Typed("#animate", {
    strings: ["a student.", "a coder", "a video editor", "an art lover"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
});

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