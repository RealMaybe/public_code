$(".position li").click(function() {
    var nowIndex = $(this).index();
    $("body,html").animate({ "scrollTop": $(".main").eq(nowIndex).offset().top + 1 });
});

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop < $(".main2").offset().top) {
        $(".position li:nth-child(1)").addClass("on");
        $(".position li:nth-child(1)").siblings().removeClass("on");
    } else if (scrollTop >= $(".main2").offset().top && scrollTop < $(".main3").offset().top) {
        $(".position li:nth-child(2)").addClass("on");
        $(".position li:nth-child(2)").siblings().removeClass("on");
    } else if (scrollTop >= $(".main3").offset().top && scrollTop < $(".main4").offset().top) {
        $(".position li:nth-child(3)").addClass("on");
        $(".position li:nth-child(3)").siblings().removeClass("on");
    } else if (scrollTop >= $(".main4").offset().top && scrollTop < $(".main5").offset().top) {
        $(".position li:nth-child(4)").addClass("on");
        $(".position li:nth-child(4)").siblings().removeClass("on");
    } else if (scrollTop >= $(".main5").offset().top && scrollTop < $(".main6").offset().top) {
        $(".position li:nth-child(5)").addClass("on");
        $(".position li:nth-child(5)").siblings().removeClass("on");
    } else if (scrollTop >= $(".main6").offset().top) {
        $(".position li:nth-child(6)").addClass("on");
        $(".position li:nth-child(6)").siblings().removeClass("on");
    }
});