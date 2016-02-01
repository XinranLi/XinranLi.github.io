
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 50) {
        $("#menu").addClass('small')
    } else {
        $("#menu").removeClass('small')
    }
});