function showTime() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1; //0~11
    let date = d.getDate();

    let week = d.getDay(); //0~6 0是周日
    week = numOfChinese(week);

    let hour = doubleNum(d.getHours());
    let min = doubleNum(d.getMinutes());
    let sec = doubleNum(d.getSeconds());

    let str = year + "年" + month + "月" + date + "日 星期" + week + "&nbsp;" + hour + "&nbsp;:&nbsp;" + min + "&nbsp;:&nbsp;" + sec;

    return str;
};

//数字转成中文
function numOfChinese(num) {
    let arr = ["日", "一", "二", "三", "四", "五", "六"];
    return arr[num];
};

// 不足两位，前面补0
function doubleNum(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
};

setInterval(function() {
    let oTime = document.getElementById("div1");
    oTime.innerHTML = showTime();
}, 1000);