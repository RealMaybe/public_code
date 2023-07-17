/* 
 * set url 
 * 该函数可设定当前页面或指定页面url地址
 * 需要传入三个参数：judge, params, url
 * 如果judge的值为true, 则获取指定页面的url, 需要传入url
 * 如果judge的值为false, 则获取当前页面的url, 不需要传入url
 * params参数始终需要传入，该参数格式为一个对象
 */
function updateUrlParams(judge, params, url) {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        searchParams.append(key, value);
    }

    const newSearch = searchParams.toString();
    let protocol, host, pathname;

    if (judge) {
        ({ protocol, host, pathname } = window.location);
    } else {
        ({ protocol, host, pathname } = new URL(url));
    }

    const newUrl = `${protocol}//${host}${pathname}?${newSearch}`;

    if (judge) {
        window.history.replaceState(null, '', newUrl);
    } else {
        return newUrl;
    }
};

/* 
 * get url
 * 该函数需要传入两个参数：judge, url
 * 如果judge的值为true, 则获取指定页面的url, 需要传入url
 * 如果judge的值为false, 则获取当前页面的url, 不需要传入url
 */
function parseUrlParams(judge, url) {
    let search, queryString;
    const params = {};

    if (judge) {
        const searchParams = new URLSearchParams(new URL(url).search);
        queryString = searchParams.toString();
    } else {
        search = window.location.search;
        queryString = search.substr(1);
    }

    if (!queryString) {
        return {};
    }

    const paramList = queryString.split('&');
    for (const param of paramList) {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    }

    return params;
}

/* 调用示例 */
/* set */
updateUrlParams(1, { uid: 1001, user: 1 });
console.log(
    updateUrlParams(0, { uid: 1001, user: 1 }, "http:127.0.0.1:550")
)

/* get */
console.log(parseUrlParams(0));
console.log(parseUrlParams(1, "http:127.0.0.1:550?uid=100000001&user=4"))