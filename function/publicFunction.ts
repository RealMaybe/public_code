/**
 * @author RealMaybe <realmaybe0429@qq.com>
 */

/**
 * 从列表中随机获取一个元素
 * @param { Array } list - 要选择元素的列表
 * @param { boolean } remove - 是否从列表中移除选择的元素
 * @returns { * } 随机选择的元素
 */
function listGetRandomItem<T>(list: T[], remove: boolean = false): T {
    let x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
};

/* ---------- */

/**
 * 获取当前时间信息。
* @param { boolean } type - 是否返回星期数值，默认为false
 * @param { string } lang - 返回星期值的语种（中：zh，英：en，日：jp），默认为zh
 * @returns { object } 包含当前时间信息的对象。
 * @property { number } year - 当前年份。
 * @property { number } month - 当前月份。
 * @property { number } date - 当前日期。
 * @property { string } week - 当前星期（如：星期一）。
 * @property { number | string } hour - 当前小时。
 * @property { number | string } min - 当前分钟。
 * @property { number | string } sec - 当前秒数。
 */
function nowTime(type: boolean = false, lang: string = "zh"): object {
    function e(e: number) { return e < 10 ? "0" + e : e };
    let d: Date = new Date(),
        week: number | string = d.getDay();

    /* 数值 */
    if (type) {
        week;
    } else {
        /* 语言 */
        if (lang == "zh") {
            week = `星期${["日", "一", "二", "三", "四", "五", "六"][d.getDay()]}`
        } else if (lang == "en") {
            week = `${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()]}`
        } else if (lang = "jp") {
            week = `${["日", "月", "火", "水", "木", "金", "土"][d.getDay()]}曜日`
        }
    }

    return {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        date: d.getDate(),
        week,
        hour: e(d.getHours()),
        min: e(d.getMinutes()),
        sec: e(d.getSeconds())
    }
};

/* ---------- */

/** 
 * 该函数可设定当前页面或指定页面url地址
 * 
 * @param { boolean } judge 布尔值, 用于判断是否获取指定页面的URL
 * @param { object } params 对象, 包含要更新的查询参数的键值对
 * @param { string } url 字符串, 表示指定页面的 URL（当 judge 为 true 时需要传入）
 * @returns { string } 当 judge 为 true 时返回新页面地址
 * 
 * @exapmle updateUrlParams(0, { uid: 1001, user: 1 });
 * @exapmle updateUrlParams(1, { uid: 1001, user: 1 }, "http:127.0.0.1:550")
*/
function updateUrlParams(judge: boolean, params: { [key: string]: string }, url?: string): string | void {
    const searchParams: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
        searchParams.append(key, value)
    }

    const newSearch = searchParams.toString();
    let protocol: string,
        host: string,
        pathname: string,
        this_url: string = location.href;

    if (judge) {
        /* 判断传入的url地址是路径形式还是url形式 */
        if (url && url?.indexOf("./") >= 0) {
            ({ protocol, host, pathname } = new URL(url, this_url))
        } else {
            ({ protocol, host, pathname } = new URL(url || location.href));
        }
    } else {
        ({ protocol, host, pathname } = location);
    }
    const newUrl = `${protocol}//${host}${pathname}?${newSearch}`;

    if (judge) {
        return newUrl
    } else {
        history.replaceState(null, "", newUrl)
    }
};

/**
 * 该函数可获取当前或指定页面URL地址中的参数
 *
 * @param { boolean } judge 布尔值, 用于判断是否解析指定页面的URL
 * @param { string } url 字符串, 表示指定页面的URL（当judge为true时需要传入）
 * @returns { object } 返回包含参数的对象
 * 
 * @example parseUrlParams(0)
 * @exapmle parseUrlParams(1, "http:127.0.0.1:550?uid=100000001&user=4")
*/
function parseUrlParams(judge: boolean, url?: string): { [key: string]: string } {
    let search: string,
        searchParams: URLSearchParams,
        queryString: string,
        this_url: string = location.href;

    const params: { [key: string]: string } = {};

    if (judge) {
        /* 判断传入的url地址是路径形式还是url形式 */
        if (url && url.indexOf("./") >= 0) {
            searchParams = new URLSearchParams(new URL(url, this_url).search)
        } else {
            searchParams = new URLSearchParams(new URL(url!).search);
        }
        queryString = searchParams.toString();
    } else {
        search = location.search;
        queryString = search.substr(1)
    }
    if (!queryString) { return {} }

    const paramList = queryString.split("&");

    for (const param of paramList) {
        const [key, value] = param.split("="); params[key] = decodeURIComponent(value)
    }

    return params;
};

/* ---------- */

/**
 * 自定义的 padStart 方法，用于在字符串的开头填充指定的字符，使字符串达到指定的长度。
 * @param { string | number } str - 需要填充的字符串。
 * @param { number } targetLength - 填充后的目标长度。
 * @param { string } padString - 用于填充的字符。
 * @returns { string } - 填充后的字符串。
 */
function customPadStart(str: string | number, targetLength: number, padString: string): string {
    str = str.toString();

    // 将目标长度和当前字符串长度的差值计算出来
    const paddingLength = targetLength - str.length;

    // 如果需要填充的长度小于等于 0，或者没有指定填充字符，则直接返回原始字符串
    if (paddingLength <= 0 || padString.length === 0) { return str }

    // 将填充字符重复拼接到目标长度，然后通过 slice 方法截取需要的部分
    const paddedString = padString.repeat(Math.ceil(paddingLength / padString.length)).slice(0, paddingLength);

    // 返回填充后的字符串
    return paddedString + str;
};

export {
    listGetRandomItem, // 随机获取数组元素
    nowTime, // 获取当前时间
    updateUrlParams, // 设定URL地址中的参数
    parseUrlParams, // 获取URL地址中的参数
    customPadStart, // padStart 在字符串的开头填充指定的字符, 使字符串达到指定的长度
}