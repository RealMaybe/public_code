// 当前时间显示

function nowTime() {
    let d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth() + 1, // 0~11
        date = d.getDate(),
        week = d.getDay(), // 0~6 0是周日
        hour = doubleNum(d.getHours()),
        min = doubleNum(d.getMinutes()),
        sec = doubleNum(d.getSeconds());

    return { year, month, date, week: `星期${numOfChinese(week)}`, hour, min, sec }
};

//数字转成中文
function numOfChinese(n) { return ["日", "一", "二", "三", "四", "五", "六"][n] }

// 不足两位，前面补0
function doubleNum(n) { if (n < 10) { return "0" + n; } else { return n; } };

/* 代码压缩 */
function nowTime() {
    function e(e) { return e < 10 ? "0" + e : e };
    let t = new Date,
        n = t.getFullYear(),
        o = t.getMonth() + 1,
        r = t.getDate(),
        u = t.getDay();
    return { year: n, month: o, date: r, week: `星期${["日","一","二","三","四","五","六"][u]}`, hour: e(t.getHours()), min: e(t.getMinutes()), sec: e(t.getSeconds()) }
}