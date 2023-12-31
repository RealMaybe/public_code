/** 
 * set url 
 * @author RealMaybe <realmaybe0429@qq.com>
 * 该函数可设定当前页面或指定页面url地址
 * 函数接受三个参数：
 * @param { boolean } judge 布尔值, 用于判断是否获取指定页面的URL
 * @param { object } params 对象, 包含要更新的查询参数的键值对
 * @param { string } url 字符串, 表示指定页面的URL（当judge为true时需要传入）
 * @exapmle
 * updateUrlParams(0, { uid: 1001, user: 1 });
 * @exapmle
 * updateUrlParams(1, { uid: 1001, user: 1 }, "http:127.0.0.1:550")
 */
function updateUrlParams(judge, params, url) {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) { searchParams.append(key, value); }

    const newSearch = searchParams.toString();
    let protocol, host, pathname, this_url = location.href;

    if (judge) {
        /* 判断传入的url地址是路径形式还是url形式 */
        if (url.indexOf("./") >= 0)({ protocol, host, pathname } = new URL(url, this_url));
        else({ protocol, host, pathname } = new URL(url));
    } else({ protocol, host, pathname } = location);

    const newUrl = `${protocol}//${host}${pathname}?${newSearch}`;

    if (judge) return newUrl;
    else history.replaceState(null, '', newUrl);
};


/**
 * get url
 * @author RealMaybe <realmaybe0429@qq.com>
 * 该函数可获取当前或指定页面URL地址中的参数
 * 函数接受两个参数：
 * @param { boolean } judge 布尔值, 用于判断是否解析指定页面的URL
 * @param { string } url 字符串, 表示指定页面的URL（当judge为true时需要传入）
 * @example
 * parseUrlParams(0)
 * @exapmle
 * parseUrlParams(1, "http:127.0.0.1:550?uid=100000001&user=4")
 */
function parseUrlParams(judge, url) {
    let search, searchParams, queryString, this_url = location.href;
    const params = {};

    if (judge) {
        if (url.indexOf("./") >= 0) searchParams = new URLSearchParams(new URL(url, this_url).search);
        else searchParams = new URLSearchParams(new URL(url).search);

        queryString = searchParams.toString();
    } else {
        search = location.search;
        queryString = search.substr(1);
    }

    if (!queryString) { return {}; }

    const paramList = queryString.split('&');
    for (const param of paramList) {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    }

    return params;
};

/* 
 * 调用示例 

// set
updateUrlParams(0, { uid: 1001, user: 1 });
console.log(updateUrlParams(1, { uid: 1001, user: 1 }, "http:127.0.0.1:550"));

// get
console.log(parseUrlParams(0));
console.log(parseUrlParams(1, "http:127.0.0.1:550?uid=100000001&user=4"));

*/