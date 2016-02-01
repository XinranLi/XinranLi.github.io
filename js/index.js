
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 50) {
        $("nav").addClass('small');
        $(".brand-logo").addClass('small');
        $(".imghead").addClass('small');
    } else {
        $("nav").removeClass('small');
        $(".brand-logo").removeClass('small');
        $(".imghead").removeClass('small');
    }
});

$(document).ready(function() {
    $("nav").hover(function() {
        $("nav").removeClass('small');
        $(".brand-logo").removeClass('small');
        $(".imghead").removeClass('small');
    }, function() {
        $("nav").addClass('small');
        $(".brand-logo").addClass('small');
        $(".imghead").addClass('small');}
        );
});

    