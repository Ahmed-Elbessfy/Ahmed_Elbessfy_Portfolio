

//$(window).on("load", function () {
//    $('body').css("overflow", "auto");
//    $("#loadingPage").fadeOut(2000, function () {
//        $(this).remove();
//
//    });
//});


//Controling Active section in navbar
$('nav .nav ul li a').click(function () {
   $('.nav a').removeClass('active'); $(this).addClass('active');
});
    var headerH, aboutH, skillsH, workH, servicesH, contactH, bodyH;
    headerH = $('header').height()-400;
    aboutH = $('#about').height()-100;
    skillsH = $('#skills').height()-350;
    workH = $('#work').height()+100;
    servicesH = $('#services').height()+200;
    contactH = $('#contact').height();

$(window).scroll(function () {
    const scrollTopVal = $(window).scrollTop();
//    console.log(scrollTopVal);
    if (scrollTopVal <= headerH) {
        $("a").removeClass('active');
        $("[href='#home']").addClass('active');
    } else if (scrollTopVal >= headerH && scrollTopVal < (aboutH + headerH)) {
        $("a").removeClass('active');
        $("a[href='#about']").addClass('active');
    } else if (scrollTopVal >= (aboutH + headerH ) && scrollTopVal < (aboutH + headerH+skillsH)) {
        $("a").removeClass('active');
        $("a[href='#skills']").addClass('active');
    } else if (scrollTopVal > (headerH+aboutH+skillsH+400) && scrollTopVal < (headerH+aboutH+skillsH+workH)) {
        $("a").removeClass('active');
        $("a[href='#work']").addClass('active');
    } else if (scrollTopVal > (headerH+aboutH+skillsH+workH) && scrollTopVal < (headerH+aboutH+skillsH+workH+servicesH)) {
        $("a").removeClass('active');
        $("a[href='#services']").addClass('active');
    } else if (scrollTopVal > (headerH+aboutH+skillsH+workH+servicesH) && scrollTopVal < (headerH+aboutH+skillsH+workH+servicesH+contactH)) {
        $("a").removeClass('active');
        $("a[href='#contact']").addClass('active');
    }
});
$(window).on('load',function () {
    const scrollTopVal = $(window).scrollTop();
    //console.log(scrollTopVal);
    if (scrollTopVal <= headerH) {
        $("a").removeClass('active');
        $("[href='#home']").addClass('active');
    } else if (scrollTopVal >= headerH && scrollTopVal < (aboutH + headerH)) {
        $("a").removeClass('active');
        $("a[href='#about']").addClass('active');
    } else if (scrollTopVal >= (aboutH + headerH ) && scrollTopVal < (aboutH + headerH+skillsH)) {
        $("a").removeClass('active');
        $("a[href='#skills']").addClass('active');
    } else if (scrollTopVal > (headerH+aboutH+skillsH+400) && scrollTopVal < (headerH+aboutH+skillsH+workH)) {
        $("a").removeClass('active');
        $("a[href='#work']").addClass('active');
    } else if (scrollTopVal > (headerH+aboutH+skillsH+workH) && scrollTopVal < (headerH+aboutH+skillsH+workH+servicesH)) {
        $("a").removeClass('active');
        $("a[href='#services']").addClass('active');
    } else if (scrollTopVal > (headerH+aboutH+skillsH+workH+servicesH) && scrollTopVal < (headerH+aboutH+skillsH+workH+servicesH+contactH)) {
        $("a").removeClass('active');
        $("a[href='#contact']").addClass('active');
    }
});


// Give a header content margin top equals to the navbar height -- Solving issue for small screens
const navH = $("nav").height();
console.log();
if($(window).innerWidth() <= 750){
$('header .content').css('margin-top',navH);
}

//Form controls
//
//$('#hd-form-activate').on('click', function () {
//    //    $('.hd-form').css('width', '100%');
//    //    $('.hd-form').css('height', '100%');
//    $(".hd-form").fadeIn(5000, function () {
//        $('.hd-form').css('display', 'grid');
//    });
//});
//
//$('#hd-form-close').on('click', function () {
//    //    $('.hd-form').css('display', 'none');
//    $(".hd-form").fadeIn(5000, function () {
//        $(this).css('display', 'none');
//    });
//});
