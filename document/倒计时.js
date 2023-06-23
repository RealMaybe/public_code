function time() {
    let now_time = new Date().getTime();
    let target_time = new Date("2023-08-12 0:0:0").getTime();
    let difference = (target_time - now_time) / 1000;

    let day = parseInt(difference / 60 / 60 / 24);
    let hour = parseInt(difference / 60 / 60 % 24);
    let minute = parseInt(difference / 60 % 60);
    let second = parseInt(difference % 60);

    let seconds = numZero(parseInt(second % 60));
    let minutes = numZero(parseInt(minute % 60));
    let hours = numZero(parseInt(hour % 60));
    let days = numZero(parseInt(day));

    let spans = document.querySelectorAll("p span");
    spans[0].innerText = days;
    spans[1].innerText = hours;
    spans[2].innerText = minutes;
    spans[3].innerText = seconds;

    return days + 1;
};

// 数字如果小于零则一直显示0
function numZero(num) {
    if (num > 0) {
        return num = num;
    } else if (num <= 0) {
        return num = 0;
    }
};

$(".day").html(time());
let birthDay_time = setInterval(() => {
    $(".day").html(time());
}, 1000);