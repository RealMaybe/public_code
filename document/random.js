/** 
 * 范围随机数生成
 * 调用时输入 min 和 max 的值，可以获取到这个范围内所有的数字
 * @param { number } min
 * @param { number } max
 * @returns { number }
 */
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/** 
 * 数字如果小于零则一直显示0
 * @param { number } n
 * @returns { number }
 */
const numZero = n => n > 0 ? n : n <= 0 ? 0 : void 0