
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("nav").addClass('small');
        $(".brand-logo").addClass('small');
        $(".imghead").addClass('small');
        
        $("nav").hover(function() {
        $("nav").removeClass('small');
        $(".brand-logo").removeClass('small');
        $(".imghead").removeClass('small');
    }, function() {
        $("nav").addClass('small');
        $(".brand-logo").addClass('small');
        $(".imghead").addClass('small');}
        );
    } else {
        $("nav").removeClass('small');
        $(".brand-logo").removeClass('small');
        $(".imghead").removeClass('small');
    }
});


    