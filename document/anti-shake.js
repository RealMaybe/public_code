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

/* 

// 使用方法实例
function handleInput() {
    // 处理输入事件的逻辑
}

// 通过防抖函数创建一个具有延迟功能的处理函数
const debouncedHandleInput = debounce(handleInput, 1000);

// 监听输入框的输入事件，并使用防抖函数处理
input.addEventListener("input", debouncedHandleInput); 

*/