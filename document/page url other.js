/* set url */
/* 
 * 该函数用于设置新页面url中的参数
 * 参数params需要以对象的形式输入
 * 参数tagetUrl需要传入指定页面url地址，数据格式为字符串
 * 最后会返回一个字符串
 */
function updateUrlParams(params, targetUrl) {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        searchParams.append(key, value);
    }

    const newSearch = searchParams.toString();
    const { protocol, host, pathname } = new URL(targetUrl);

    const newUrl = `${protocol}//${host}${pathname}?${newSearch}`;

    return newUrl;
};


/* get url */
/*
 * 获取url中的参数， 并输出一个对象
 * 需要传入一个指定参数，该参数内容为指定url地址，内容格式为字符串
 */
function getParamsFromUrl(url) {
    const queryString = new URL(url).searchParams;
    const params = {};

    for (const [key, value] of queryString.entries()) {
        params[key] = value;
    }

    return params;
};


// 调用示例
// set
console.log(
    updateUrlParams({ user: 1, uid: 100011 }, "http://127.0.0.1:5500")
)

// get
console.log(
    getParamsFromUrl("http://127.0.0.1:10101?url=10001&user=4")
)