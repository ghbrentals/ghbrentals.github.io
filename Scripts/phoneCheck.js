var phoneCheck = function () {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var mobile = width <= 500;
    if (mobile) {
        $('.phone').hide();
        $('.mobilePhone').show();
    }
    else {
        $('.mobilePhone').hide();
        $('.phone').show();
    }
}
$(function () {
    phoneCheck();
    $(window).resize(function () {
        phoneCheck();
    });
});
