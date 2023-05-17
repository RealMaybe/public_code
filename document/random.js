/* 范围随机数生成 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
/* 调用时输入 min 和 max 的值，可以获取到这个范围内所有的数字 */