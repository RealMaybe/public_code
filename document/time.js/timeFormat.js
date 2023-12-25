/**
 * 根据指定格式格式化日期
 * 
 * @param { Date } date 日期对象
 * @param { string | function } formatter 格式化字符串或自定义格式化函数
 * @param { boolean } [isPad = false]  是否对日期的各个部分进行补零处理，默认为false
 * @returns { string } 格式化后的日期字符串
 * 
 * 如果 formatter 传入的值为字符串，则仅可为 "date"，"datetime"，"time"
 * 如果 formatter 传入的值为函数，则须要在该函数中写明特定的处理方式
 */
function formate(date, formatter, isPad = false) {
    /* 内部公共函数部分 */

    /**
     * 将格式化字符串规范为格式化函数
     * @param { string | function } formatter 格式化字符串或自定义格式化函数
     * @returns { function } 格式化函数
     */
    function _formatNormalize(formatter) {
        /* 基本判断 */
        if (typeof formatter === "function") return formatter; // 如果是函数直接返回
        if (typeof formatter !== "string") throw new TypeError("Error: formatter must be a string"); // 如果不是字符串，抛出报错

        /* 格式判断 */
        if (formatter === "date") formatter = "yyyy-MM-dd";
        else if (formatter === "datetime") formatter = "yyyy-MM-dd hh:mm:ss";
        else if (formatter === "time") formatter = "hh:mm:ss";

        /**
         * 自定义格式化函数
         * @param { object } dateInfo 日期信息对象
         * @returns { string } 格式化后的日期字符串
         */
        const formatterFunc = dateInfo => {
            const { yyyy, MM, dd, hh, mm, ss, ms } = dateInfo;

            return formatter
                .replaceAll("yyyy", yyyy)
                .replaceAll("MM", MM)
                .replaceAll("dd", dd)
                .replaceAll("hh", hh)
                .replaceAll("mm", mm)
                .replaceAll("ss", ss)
                .replaceAll("ms", ms)
        };

        return formatterFunc;
    };

    /**
     * 自定义的 padStart 方法，用于在字符串的开头填充指定的字符，使字符串达到指定的长度。
     * @param { string | number } str 需要填充的字符串。
     * @param { number } targetLength 填充后的目标长度。
     * @param { string } padString 用于填充的字符。
     * @returns { string } 填充后的字符串。
     */
    function customPadStart(str, targetLength, padString = "0") {
        str = str.toString();
        const paddingLength = targetLength - str.length; // 将目标长度和当前字符串长度的差值计算出来
        if (paddingLength <= 0 || padString.length === 0) return str; // 如果需要填充的长度小于等于 0，或者没有指定填充字符，则直接返回原始字符串
        const paddedString = padString.repeat(Math.ceil(paddingLength / padString.length)).slice(0, paddingLength); // 将填充字符重复拼接到目标长度，然后通过 slice 方法截取需要的部分
        return paddedString + str; // 返回填充后的字符串
    };

    /* --------------- */
    /* 实际执行效果部分 */

    // 格式化字符串处理，确保formatter是一个函数
    formatter = _formatNormalize(formatter);

    // 定义一个包含日期信息的对象
    const dateInfo = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        week: date.getDay(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };

    // 将日期信息转化为字符串，并赋给相应的属性
    dateInfo.yyyy = dateInfo.year.toString();
    dateInfo.MM = dateInfo.month.toString();
    dateInfo.dd = dateInfo.date.toString();
    dateInfo.hh = dateInfo.hour.toString();
    dateInfo.mm = dateInfo.minute.toString();
    dateInfo.ss = dateInfo.second.toString();

    // 如果isPad为true，则对年份、月份、日期、小时、分钟和秒钟进行补零处理
    if (isPad) dateInfo.yyyy = customPadStart(dateInfo.yyyy, 4),
        dateInfo.MM = customPadStart(dateInfo.MM, 2),
        dateInfo.dd = customPadStart(dateInfo.dd, 2),
        dateInfo.hh = customPadStart(dateInfo.hh, 2),
        dateInfo.mm = customPadStart(dateInfo.mm, 2),
        dateInfo.ss = customPadStart(dateInfo.ss, 2)

    // 调用formatter函数，并将dateInfo作为参数传入，得到最终的格式化后的日期字符串
    const result = formatter(dateInfo);

    // 返回格式化后的日期字符串
    return result;
};

/* 调用实例 */
const d = new Date();

formate(d, "date", 1);

formate(new Date("2024-8-12"), (d) => {
    const { year } = d;
    const thisYear = new Date().getFullYear();

    if (year < thisYear) return `${thisYear - year}年前`
    else if (year > thisYear) return `${year - thisYear}年后`
    else return "今年"
})