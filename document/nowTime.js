// 当前时间显示

function showTime() {
    let d = new Date(),
        year = d.getFullYear(),
        month = d.getMonth() + 1, // 0~11
        date = d.getDate();

    let week = d.getDay(); // 0~6 0是周日
    week = numOfChinese(week);

    let hour = doubleNum(d.getHours()),
        min = doubleNum(d.getMinutes()),
        sec = doubleNum(d.getSeconds());

    let str = year + "年" + month + "月" + date + "日 星期" + week + "&nbsp;" + hour + "&nbsp;:&nbsp;" + min + "&nbsp;:&nbsp;" + sec;

    return str;
};

//数字转成中文
function numOfChinese(n) { let arr = ["日", "一", "二", "三", "四", "五", "六"]; return arr[n]; };

// 不足两位，前面补0
function doubleNum(n) { if (n < 10) { return "0" + n; } else { return n; } };

// 调用
setInterval(() => {
    let oTime = document.getElementById("div1");
    oTime.innerHTML = showTime()
}, 1000);