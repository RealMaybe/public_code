// textarea文本框自适应高度
(function($) {
    $.fn.autoTextarea = function(options) {
        let defaults = {
            maxHeight: null, //文本框是否自动撑高，默认：null，不自动撑高；如果自动撑高必须输入数值，该值作为文本框自动撑高的最大高度
            minHeight: $(this).height() //默认最小高度，也就是文本框最初的高度，当内容高度小于这个高度的时候，文本以这个高度显示
        };
        let opts = $.extend({}, defaults, options);
        return $(this).each(function() {
            $(this).bind("paste cut keydown keyup focus blur", function() {
                let height, style = this.style;
                this.style.height = opts.minHeight + 'px';
                if (this.scrollHeight > opts.minHeight) {
                    if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
                        height = opts.maxHeight;
                        style.overflowY = 'scroll';
                    } else {
                        height = this.scrollHeight;
                        style.overflowY = 'hidden';
                    }
                    style.height = height + 'px';
                }
            });
        });
    };
})(jQuery);

// 调用实例
$(".textarea").autoTextarea({
    maxHeight: 220, //文本框是否自动撑高，默认：null，不自动撑高；如果自动撑高必须输入数值，该值作为文本框自动撑高的最大高度
});

/*
 * 根据Value格式化为带有换行、空格格式的HTML代码
 * @param strValue {String} 需要转换的值
 * @return  {String}转换后的HTML代码
 * @example  
 * getFormatCode("测\r\n\s试")  =>  “测<br/> 试”
 */
function getFormatCode(strValue) {
    return strValue.replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>").replace(/\s/g, " ");
};

// 调用实例
$("textarea").attr("maxlength", 10000).on("input keyup", function() {
    let textLength = $(this).val().trim().length; // 去除首尾空格后的总长度
    $("span.length").text(textLength); // 当前字数显示
}).autoTextarea({
    maxHeight: 500
});