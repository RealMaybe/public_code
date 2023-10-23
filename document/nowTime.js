// 当前时间显示

function nowTime() {
    let d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth() + 1, // 0~11
        date = d.getDate();

    let week = d.getDay(); // 0~6 0是周日
    week = numOfChinese(week);

    let hour = doubleNum(d.getHours()),
        min = doubleNum(d.getMinutes()),
        sec = doubleNum(d.getSeconds());

    return {
        year: year,
        month: month,
        date: date,
        week: `星期${week}`,
        hour: hour,
        min: min,
        sec: sec
    }
};

//数字转成中文
function numOfChinese(n) { return ["日", "一", "二", "三", "四", "五", "六"][n] }

// 不足两位，前面补0
function doubleNum(n) { if (n < 10) { return "0" + n; } else { return n; } };

/* 代码压缩 */
function nowTime() {
    function numOfChinese(n) { return ["日", "一", "二", "三", "四", "五", "六"][n] };

    function doubleNum(u) { return u < 10 ? "0" + u : u };

    let e = new Date,
        t = e.getFullYear(),
        u = e.getMonth() + 1,
        n = e.getDate(),
        o = e.getDay();
    return {
        year: t,
        month: u,
        date: n,
        week: `星期${o = numOfChinese(o)}`,
        hour: doubleNum(e.getHours()),
        min: doubleNum(e.getMinutes()),
        sec: doubleNum(e.getSeconds())
    }
}