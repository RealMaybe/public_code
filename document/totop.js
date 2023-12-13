/* totop */
var totop = document.querySelector(".totop");
totop.onclick = function() {
    var height = document.documentElement.scrollTop || document.body.scrollTop;
    var t = setInterval(() => {
        height -= 500;
        if (height > 0) {
            window.scrollTo(0, height);
        } else {
            window.scrollTo(0, 0);
            clearInterval(t);
        }
    }, 10);
};

/* 回到顶部 */
$(".returnTop").click(function() {
    var height = document.documentElement.scrollTop || document.body.scrollTop;
    var t = setInterval(() => {
        /* 如果需要回到顶部的缓动效果，这里的 -= 的值可以设置的小一点 */
        height -= 500;
        if (height > 0) {
            window.scrollTo(0, height);
        } else {
            window.scrollTo(0, 0);
            clearInterval(t);
        }
    }, 10);
});

$(".totop").click(function() { $("html").animate({ scrollTop: 0 }, 500) });