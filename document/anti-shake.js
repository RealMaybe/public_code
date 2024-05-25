/**
 * 防抖函数，限制函数的执行频率，只在特定时间段后执行最后一次触发的事件。
 * @param { Function } func 要执行的函数
 * @param { number } delay 延迟的毫秒数
 * @returns { Function } 具有防抖功能的函数
 */
function debounce(func, delay) {
    let timerId; // 记录计时器 ID

    return function(...args) {
        clearTimeout(timerId); // 清除之前的计时器

        // 设置新的计时器，经过指定时间后执行函数
        timerId = setTimeout(() => {
            func.apply(this, args) // 执行函数
        }, delay);
    }
};

/**
 * 节流函数，限制函数的执行频率，在一定时间段内只执行一次。
 * @param { Function } func 要执行的函数
 * @param { number } delay 延迟的毫秒数
 * @returns { Function } 具有节流功能的函数
 */
function throttle(func, delay) {
    let lastExecuted = 0;

    return function() {
        const now = Date.now();

        if (now - lastExecuted >= delay) {
            func.apply(this, arguments);
            lastExecuted = now;
        }
    };
}