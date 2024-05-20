// 计算任意两天相差多少天
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime())) / 86400000;
// dayDiff(new Date("2022-12-11"), new Date("2023-12-10"))

// hh:mm:ss 格式返回当前时间点
const timeFormat = date => date.toTimeString.slice(0, 8);
// console.log(timeFormat(new Date()));

// rgb转16进制颜色
const colorConvert = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// console.log(colorConvert(255, 255, 255));

// 回顶部
const returnTop = () => window.scrollTo(0, 0); // x y 都回到0
// returnTop();

// 快速数组去重
const removeDup = arr => [...new Set(arr)];
removeDup([1, 2, 2, 3, 3, 4, 4, 5, 5, 5])

// 字符串反转
Array.from("dlrow olleH").reduce((pre, cur) => cur + pre);

// 查看指定月有多少天
const getDays = (year, month) => new Date(year, month, 0).getDate();

// 正则去除多余空格
const replaceStr = str => str.replace(/\s\s+/g, "");

// 位数不够往前补0 （其实相当于一个自定义的padStart）
const replenishZero = (num, len, zero = 0) => num.toString().padStart(len, zero);

// 秒转换为hh:mm:ss
const formatSeconds = s => new Date(s * 1000).toISOString().substring(11, 19);

// 范围随机数生成
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// 复制文本到剪贴板
const copyClipboard = text => navigator.clipboard.writeText(text);
// 兼容性存在问题

// 获取某个日期位于当年的第几天
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// 将RGB颜色灰度化（基于光感加权平均）
const ColorGray = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

// 解析URL中的参数
const parseQuery = url => {
    q = {};
    url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
    return q;
};

// 筛选对象属性
const pick = (obj, ...props) => Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));

// 随机颜色
const randomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");

// 随机字符串
const randomString = () => Math.random().toString(36).slice(2);

// 去掉字符串中的元素标记
const removeTag = fragment => new DOMParser().parseFromString(fragment, "text/html").body.textContent || "";

// 判断奇偶数
const isEven = n => (n % 2 === 1 || n % 2 === -1);