/* textarea文本框自适应高度 */
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
                this.style.height = opts.minHeight + "px";
                if (this.scrollHeight > opts.minHeight) {
                    if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
                        height = opts.maxHeight;
                        style.overflowY = "scroll";
                    } else {
                        height = this.scrollHeight;
                        style.overflowY = "hidden";
                    }
                    style.height = height + "px";
                }
            });
        });
    };
})(jQuery);

/**
 * 自适应高度的 textarea 输入框
 * @param { object | number } options 配置项，可以是一个数字（表示最大高度），或者一个包含最大高度和最小高度的对象
 * @param { HTMLTextAreaElement } element 需要自适应高度的 textarea 元素
 */
function autoTextarea(options, element) {
    // 默认配置项
    let parameter,
        defaults = {
            maxHeight: null,
            minHeight: element.clientHeight
        };

    // 检测传入数据类型
    if (typeof options === "number") parameter = { maxHeight: options }
    else if (typeof options === "object") parameter = options
    else { console.error("The parameter of this function ( autoTextarea ) must be number or object"); return }

    let opts = Object.assign({}, defaults, parameter); // 合并配置项

    // 监听 textarea 的输入事件
    element.addEventListener("input", function() {
        // 设置 textarea 的最小高度
        element.style.height = opts.minHeight + "px";
        // 如果内容高度大于最小高度
        if (element.scrollHeight > opts.minHeight) {
            // 如果设置了最大高度，并且内容高度大于最大高度
            if (opts.maxHeight && element.scrollHeight > opts.maxHeight) {
                // 设置 overflowY 为滚动条，高度为最大高度
                element.style.overflowY = "scroll";
                element.style.height = opts.maxHeight + "px";
            } else {
                // 没有设置最大高度或者内容高度小于等于最大高度
                // 设置 overflowY 为隐藏，高度为内容高度
                element.style.overflowY = "hidden";
                element.style.height = element.scrollHeight + "px";
            }
        }
    });
};

/** 
 * 根据Value格式化为带有换行、空格格式的HTML代码
 * @param { String } strValue 需要转换的值
 * @return { String } 转换后的HTML代码
 * @example
 * getFormatCode("测\r\n\s试")  =>  “测<br/> 试”
 */
function getFormatCode(strValue) { return strValue.replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>").replace(/\s/g, " "); };

function getFormatCode(strValue) { return `<div><p>${strValue.replace(/\r\n/g,"</p><p>").replace(/\n/g,"</p><p>")}</p></div>` };

/* 调用实例 */
$(".textarea").autoTextarea({ maxHeight: 220 });

$("textarea").attr("maxlength", 10000).on("input keyup", function() {
    let textLength = $(this).val().trim().length; /* 去除首尾空格后的总长度 */
    $("span.length").text(textLength); /* 当前字数显示 */
}).autoTextarea({ maxHeight: 500 });

let textareaElement = document.querySelector("textarea");
autoTextarea(textareaElement, { maxHeight: 600, minHeight: 100 });