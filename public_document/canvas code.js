/* canvas */
function code() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 120;
    canvas.height = 40;

    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let code = "";
    let codeLength = 6;

    for (let i = 0; i < codeLength; i++) {
        let char = chars[Math.floor(Math.random() * chars.length)];
        code += char;
    };

    ctx.font = "24px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(code, 15, 30);
};
code();