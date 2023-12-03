/* 当前时间显示 */

/**
 * 获取当前时间信息。
 * @param { string } [lang = "zh"] - 返回星期值的语种（中：zh，英：en，日：jp），默认为zh。
 * @returns { object } 包含当前时间信息的对象。
 * @property { number } year - 当前年份。
 * @property { number } month - 当前月份。
 * @property { number } date - 当前日期。
 * @property { number | string } week - 当前星期（如：星期一）。
 * @property { number | string } hour - 当前小时。
 * @property { number | string } min - 当前分钟。
 * @property { number | string } sec - 当前秒数。
 */
function nowTime(lang = "zh") {
    function e(e) { return e < 10 ? "0" + e : e };
    let d = new Date();

    return {
        year: d.getFullYear(),
        month: e(d.getMonth() + 1),
        date: e(d.getDate()),
        week: "zh" === lang ? `星期${["日", "一", "二", "三", "四", "五", "六"][d.getDay()]}` : "en" === lang ? `${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()]}` : "jp" === lang ? `${["日", "月", "火", "水", "木", "金", "土"][d.getDay()]}曜日` : d.getDay(),
        hour: e(d.getHours()),
        min: e(d.getMinutes()),
        sec: e(d.getSeconds())
    }
}

/* 
 * year - 当前年份，number类型，返回当前年
 * month - 当前月份，0 ~ 11
 * date - 当前日期
 * week - 当前星期，0 ~ 6，0是周日
 * hour - 当前小时
 * min - 当前分钟
 * sec - 当前秒数
 */