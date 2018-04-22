/*global $, window, console */
//$('document').ready(function () {
//
//    'user strict';
////    $('.optionControl').click(function () {
//        $('.colorOption').fadeToggle();
//    });
//
//    var color = $('#optionbox .colorOption ul li');
//    color.click(function () {
//        //        $('link[href*="color"]').attr('href', $(this).attr('data-value'));
//        $('body').attr("data-themeColor", $(this).attr('class'));
//
//    });
//
//});


//$(window).on("load", function () {
//    $('body').css("overflow", "auto");
//    $("#loadingPage").fadeOut(2000, function () {
//        $(this).remove();
//
//    });
//});

$(window).scroll(function () {
    console.log($(window).scrollTop());
    var headerH = $(window).height();

    console.log(headerH);
    if ($(window).scrollTop() >= (headerH - 300)) {
        //        $('#scroll').show();
        $('nav').addClass('contrast');
    } else {
        //        $('#scroll').hide();
        $('nav').removeClass('contrast');
    }
});

//$("#scroll").click(function () {
//    $("html").animate({
//        scrollTop: 0
//    }, 600);});
