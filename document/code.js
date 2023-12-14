/* 自动生成随机验证码 */
function code(code_length) {
    let code_tips = "",
        content = [],
        num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    content = content.concat(num); // 重复数字

    for (let a = 65; a <= 90; a++) { content.push(String.fromCharCode(a)) } // 大写字母
    content = content.concat(num);

    for (let b = 97; b <= 122; b++) { content.push(String.fromCharCode(b)) } // 小写字母
    content = content.concat(num);

    // 输出长度
    for (let c = 0; c < code_length; c++) { code_tips += content[Math.floor(Math.random() * content.length)] }
    return code_tips;
};

// 验证码写入到指定位置
var code_tip = document.querySelector(".code_tip");
code_tip.innerHTML = code(4);


/* canvas */
function canvasCode() {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
        code = "",
        codeLength = 6;

    canvas.width = 120;
    canvas.height = 40;

    for (let i = 0; i < codeLength; i++) {
        let char = chars[Math.floor(Math.random() * chars.length)];
        code += char;
    };

    ctx.font = "24px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(code, 15, 30);
};

canvasCode();