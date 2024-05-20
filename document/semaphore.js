/* 排他 */
function paita(ele, name) { for (var i = 0; i < ele.length; i++) { ele[i].className = name; }; };

$("li").click(function() { $(this).addClass("on").siblings().removeClass("on"); });