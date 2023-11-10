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

/**
 * 获取当前时间信息。
 * @returns { Object } 包含当前时间信息的对象。
 * @property { Date } d - 当前的日期对象。
 * @property { number } year - 当前年份。
 * @property { number } month - 当前月份。
 * @property { number } date - 当前日期。
 * @property { string } week - 当前星期（如：星期一）。
 * @property { number | string } hour - 当前小时。
 * @property { number | string } min - 当前分钟。
 * @property { number | string } sec - 当前秒数。
 */
function nowTime(): object { function e(e: number) { return e < 10 ? "0" + e : e }; let d: Date = new Date(), year: number = d.getFullYear(), month: number = d.getMonth() + 1, date: number = d.getDate(), week: number | string = d.getDay(), hour: number | string = e(d.getHours()), min: number | string = e(d.getMinutes()), sec: number | string = e(d.getSeconds()); return { d, year, month, date, week: `星期${["日", "一", "二", "三", "四", "五", "六"][week]}`, hour, min, sec } };


/** 
 * 该函数可设定当前页面或指定页面url地址
 * 函数接受三个参数：
 * @param { boolean } judge 布尔值, 用于判断是否获取指定页面的URL
 * @param { object } params 对象, 包含要更新的查询参数的键值对
 * @param { string } url 字符串, 表示指定页面的 URL（当 judge 为 true 时需要传入）
 * @returns { string } 当 judge 为 true 时返回新页面地址
 * @exapmle updateUrlParams(0, { uid: 1001, user: 1 });
 * @exapmle updateUrlParams(1, { uid: 1001, user: 1 }, "http:127.0.0.1:550")
 */
function updateUrlParams(judge: boolean, params: { [key: string]: string }, url?: string): string | void {
    const searchParams: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) { searchParams.append(key, value) }
    const newSearch = searchParams.toString();
    let protocol: string, host: string, pathname: string, this_url: string = location.href;
    if (judge) {
        /* 判断传入的url地址是路径形式还是url形式 */
        if (url && url?.indexOf("./") >= 0) { ({ protocol, host, pathname } = new URL(url, this_url)) }
        else { ({ protocol, host, pathname } = new URL(url || location.href)); }
    } else {
        ({ protocol, host, pathname } = location);
    }
    const newUrl = `${protocol}//${host}${pathname}?${newSearch}`;
    if (judge) { return newUrl; }
    else { history.replaceState(null, "", newUrl); }
};

/**
 * 该函数可获取当前或指定页面URL地址中的参数
 * 函数接受两个参数：
 * @param { boolean } judge 布尔值, 用于判断是否解析指定页面的URL
 * @param { string } url 字符串, 表示指定页面的URL（当judge为true时需要传入）
 * @returns { object } 返回包含参数的对象
 * @example parseUrlParams(0)
 * @exapmle parseUrlParams(1, "http:127.0.0.1:550?uid=100000001&user=4")
 */
function parseUrlParams(judge: boolean, url?: string): { [key: string]: string } {
    let search: string, searchParams: URLSearchParams, queryString: string, this_url: string = location.href;
    const params: { [key: string]: string } = {};
    if (judge) {
        /* 判断传入的url地址是路径形式还是url形式 */
        if (url && url.indexOf("./") >= 0) { searchParams = new URLSearchParams(new URL(url, this_url).search) }
        else { searchParams = new URLSearchParams(new URL(url!).search); } queryString = searchParams.toString();
    } else { search = location.search; queryString = search.substr(1) }
    if (!queryString) { return {} }
    const paramList = queryString.split("&");
    for (const param of paramList) { const [key, value] = param.split("="); params[key] = decodeURIComponent(value) }
    return params;
};

export {
    listGetRandomItem, // 随机获取数组元素
    nowTime, // 获取当前时间
    updateUrlParams, // 设定URL地址中的参数
    parseUrlParams, // 获取URL地址中的参数
}