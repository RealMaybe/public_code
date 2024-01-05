/**
 * 倒计时函数，用于计算当前时间与指定时间之间的时间差（天、小时、分钟、秒）
 * @param { string } time - 指定时间，格式为 YYYY-MM-DD HH:mm:ss
 * @return { object } 返回一个包含秒、分钟、小时和天数的对象
 * @property { number } seconds - 剩余的秒数
 * @property { number } minutes - 剩余的分钟数
 * @property { number } hours - 剩余的小时数
 * @property { number } days - 剩余的天数
 */
function countdown(time) {
    /**
     * 辅助函数，将小于等于 0 的数字转换为 0
     * @param { number } n 需要转换的数字
     * @returns { number } 转换后的数字
     */
    const e = n => n > 0 ? n : n <= 0 ? 0 : void 0;

    // 获取当前时间和目标时间的时间戳，并计算时间差（秒）
    let now = new Date().getTime(),
        target = new Date(time).getTime(),
        difference = (target - now) / 1000,

        // 根据时间差计算剩余的天数、小时数、分钟数和秒数
        days = parseInt(difference / 60 / 60 / 24),
        hours = parseInt(difference / 60 / 60 % 24),
        minutes = parseInt(difference / 60 % 60),
        seconds = parseInt(difference % 60);

    // 使用辅助函数转换为大于等于零的数字并返回
    return {
        second: e(parseInt(seconds % 60)),
        minute: e(parseInt(minutes % 60)),
        hour: e(parseInt(hours % 60)),
        day: e(parseInt(days))
    }
}