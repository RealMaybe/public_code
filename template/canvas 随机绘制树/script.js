const canvas = document.querySelector("#canvas"); // 获取canvas元素
const ctx = canvas.getContext("2d"); // 获取2d渲染

// devicePixelRatio 设备的像素比例
canvas.width = window.innerWidth * devicePixelRatio; // 设置canvas宽度
canvas.height = window.innerHeight * devicePixelRatio; // 设置canvas高度

// 调整坐标原点
ctx.translate(canvas.width / 2, canvas.height);
ctx.scale(1, -1);

// 绘制主干
drawBranch([0, 0], 30, 200, 90);

/**
 * 绘制线段
 * @param { array } v0 起点坐标
 * @param { number } thick 线段粗细
 * @param { number } length 线段长度
 * @param { number } dir 线段与X轴夹角
 */
function drawBranch(v0, thick, length, dir) {
    // 随机数
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    /* 跳出 */
    if (thick < 10 && Math.random() < 0.3) return;

    if (thick < 2) {
        // 绘制顶端彩点
        ctx.beginPath();
        ctx.arc(...v0, 10, 0, 2 * Math.PI);
        ctx.fillStyle = Math.random() < 0.5 ? "#FFF" : "#F40";
        ctx.fill();

        return
    };

    /* 线段绘制 */
    ctx.beginPath();
    ctx.moveTo(...v0); // 起点坐标

    const v1 = [
        v0[0] + length * Math.cos((dir * Math.PI) / 180),
        v0[1] + length * Math.sin((dir * Math.PI) / 180)
    ];

    ctx.lineTo(...v1); // 终点坐标

    ctx.strokeStyle = "#333"; // 线段颜色
    ctx.lineCap = "round"; // 线段样式，圆角
    ctx.lineWidth = thick; // 线段宽度
    ctx.stroke(); // 绘制

    /* 递归绘制左右分支 */
    drawBranch(v1, thick * 0.8, length * 0.8, dir + getRandom(10, 40));
    drawBranch(v1, thick * 0.8, length * 0.8, dir - getRandom(10, 40));
}