/* 自动生成随机验证码 */
function code(code_length) {
    let code_tips = "";
    let content = [];
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    /* 重复数字 */
    content = content.concat(num);
    /* 大写字母 */
    for (let a = 65; a <= 90; a++) {
        content.push(String.fromCharCode(a));
    };
    content = content.concat(num);
    /* 小写字母 */
    for (let b = 97; b <= 122; b++) {
        content.push(String.fromCharCode(b));
    };
    content = content.concat(num);
    /* 输出长度 */
    for (let c = 0; c < code_length; c++) {
        code_tips += content[Math.floor(Math.random() * content.length)];
    };
    return code_tips;
};

// 验证码写入到指定位置
var code_tip = document.querySelector(".code_tip");
code_tip.innerHTML = code(4);