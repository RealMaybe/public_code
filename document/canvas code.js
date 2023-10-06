/* canvas */
function code() {
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

code();