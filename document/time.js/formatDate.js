/**
 * 格式化日期和时间。
 * @param { number } value - 表示时间的时间戳（以毫秒为单位）。
 * @param { string } [spe = "/"] - 分隔符（默认为斜杠）。
 * @returns { string } - 格式化后的日期和时间字符串。
 */
function formatDate(value, spe = "/") {
    /**
     * 在数字小于10之前添加前零。
     * @param { number } num - 待处理的数字。
     * @returns { string | number } - 处理后的数字字符串。
     */
    const e = n => n < 10 ? "0" + n : n;

    let D = new Date(value),
        year = D.getFullYear(),
        month = e(D.getMonth() + 1),
        day = e(D.getDate()),
        hour = e(D.getHours()),
        min = e(D.getMinutes()),
        sec = e(D.getSeconds());

    return `${year}${spe}${month}${spe}${day} ${hour}:${min}:${sec}`;
}