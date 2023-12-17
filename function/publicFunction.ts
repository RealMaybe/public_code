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
function nowTime(lang: string = "zh"): object {
    function e(e: number): number | string { return e < 10 ? "0" + e : e };
    let d: Date = new Date();

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

    const newSearch: string = searchParams.toString();

    let protocol: string,
        host: string,
        pathname: string,
        this_url: string = location.href;

    if (judge) {
        /* 判断传入的url地址是路径形式还是url形式 */
        url && url?.indexOf("./") >= 0 ? ({ protocol, host, pathname } = new URL(url, this_url)) : ({ protocol, host, pathname } = new URL(url || location.href))
    } else ({ protocol, host, pathname } = location);

    const newUrl: string = `${protocol}//${host}${pathname}?${newSearch}`;

    return judge ? newUrl : history.replaceState(null, "", newUrl)
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
        if (url && url.indexOf("./") >= 0) searchParams = new URLSearchParams(new URL(url, this_url).search);
        else searchParams = new URLSearchParams(new URL(url!).search);

        queryString = searchParams.toString();
    } else {
        search = location.search;
        queryString = search.substr(1)
    }
    if (!queryString) return {}

    const paramList: string[] = queryString.split("&");

    for (const param of paramList) {
        const [key, value] = param.split("="); params[key] = decodeURIComponent(value)
    }

    return params;
};

/* ---------- */

/**
 * 自定义的 padStart 方法，用于在字符串的开头填充指定的字符，使字符串达到指定的长度。
 * @param { string } str - 需要填充的字符串。
 * @param { number } targetLength - 填充后的目标长度。
 * @param { string } padString - 用于填充的字符。
 * @returns { string } - 填充后的字符串。
 */
function customPadStart(str: string, targetLength: number, padString: string): string {
    str = str.toString();

    // 将目标长度和当前字符串长度的差值计算出来
    const paddingLength: number = targetLength - str.length;

    // 如果需要填充的长度小于等于 0，或者没有指定填充字符，则直接返回原始字符串
    if (paddingLength <= 0 || padString.length === 0) { return str }

    // 将填充字符重复拼接到目标长度，然后通过 slice 方法截取需要的部分
    const paddedString: string = padString.repeat(Math.ceil(paddingLength / padString.length)).slice(0, paddingLength);

    // 返回填充后的字符串
    return paddedString + str;
};

/* ---------- */

/**
 * 数组去重
 * @param { T[] } array - 需要去重的数组
 * @returns { T[] } - 去重后的新数组
 */
function arrayDeduplication<T>(array: T[]): T[] {
    // 复制数组
    const newArr: T[] = [...array];

    // 检查是否为对象
    const isObject = (val: any): boolean => typeof val === "object" && val !== null;

    // 判断两个值是否相等
    function equals(val_1: any, val_2: any): boolean {
        // 如果两个值中有一个不是对象，直接使用 Object.is 方法比较
        if (!isObject(val_1) || !isObject(val_2)) return Object.is(val_1, val_2);

        // 如果两个值相等，返回 true
        if (val_1 === val_2) return true;

        // 获取两个对象的 key 数组
        const val1Keys = Object.keys(val_1);
        const val2Keys = Object.keys(val_2);

        // 如果两个对象的 key 数量不一致，返回 false
        if (val1Keys.length !== val2Keys.length) return false;

        // 遍历 val_1 对象的 key
        for (let key of val1Keys) {
            // 如果 val_2 对象的 key 中不包含当前 key，返回 false
            if (!val2Keys.includes(key)) return false;

            // 递归判断当前 key 的值是否相等
            const res = equals(val_1[key], val_2[key]);
            if (!res) return false;
        }

        // 所有 key 的值都相等，返回 true
        return true;
    }

    // 数组去重
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            // 如果两个值相等，删除 newArr[j]，然后 j 减 1
            if (equals(newArr[i], newArr[j])) {
                newArr.splice(j, 1);
                j--;
            }
        }
    }

    // 返回去重后的新数组
    return newArr.sort((a: any, b: any) => a - b);
};

/**
 * 自适应高度的 textarea 输入框
 * @param { number | { "maxHeight": number, "minHeight": number} } options 配置项，可以是一个数字（表示最大高度），或者一个包含最大高度和最小高度的对象
 * @param { number } options.maxHeight - 文本域的最大高度限制
 * @param { number } options.minHeight - 文本域的最小高度限制
 * @param { HTMLTextAreaElement } element 需要自适应高度的 textarea 元素
 */
function autoTextarea(options: number | {
    maxHeight: number,
    minHeight: number
}, element: HTMLTextAreaElement): void {
    // 默认配置项
    let parameter: number | object;
    const defaults: object = {
        maxHeight: null,
        minHeight: element.clientHeight
    };

    // 数据类型检测 参数归一化
    if (typeof options === "number") parameter = { maxHeight: options };
    else if (typeof options === "object") parameter = options;
    else { console.error("Error: The parameter of this function (autoTextarea) must be number or object"); return }

    const opts: {
        maxHeight: number | null,
        minHeight: number
    } = {
        ...defaults,
        ...parameter,
        maxHeight: 0,
        minHeight: 0
    }; // 合并配置项

    // 监听 textarea 的输入事件
    element.addEventListener("input", function () {
        // 设置 textarea 的最小高度
        element.style.height = opts.minHeight + "px";
        // 如果内容高度大于最小高度
        if (element.scrollHeight > opts.minHeight) {
            // 如果设置了最大高度，并且内容高度大于最大高度
            if (opts.maxHeight && element.scrollHeight > opts.maxHeight) {
                // 设置 overflowY 为滚动条，高度为最大高度
                element.style.overflowY = "scroll";
                element.style.height = opts.maxHeight + "px";
            } else {
                // 没有设置最大高度或者内容高度小于等于最大高度
                // 设置 overflowY 为隐藏，高度为内容高度
                element.style.overflowY = "hidden";
                element.style.height = element.scrollHeight + "px";
            }
        }
    })
};

/* ---------- */

/* 导出相关函数 */
export {
    listGetRandomItem, // 随机获取数组元素
    nowTime, // 获取当前时间
    updateUrlParams, // 设定URL地址中的参数
    parseUrlParams, // 获取URL地址中的参数
    customPadStart, // padStart 在字符串的开头填充指定的字符, 使字符串达到指定的长度
    arrayDeduplication, // 数组去重
    autoTextarea, //  textarea 输入框自适应高度
}