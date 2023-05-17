// 文本框最大字数限制
// jquery

// text：文本框
// count：总数显示
// maxlength：最大长度

function text_maxlength(text, count, maxlength) {
    text.attr("maxlength", maxlength);
    text.on("input propertychange change", () => {});
};