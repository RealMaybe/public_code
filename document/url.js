// set url
// 设置url中的参数，需要以对象的形式输入
function updateUrlParams(params) {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        searchParams.append(key, value);
    }

    const newSearch = searchParams.toString();
    const { protocol, host, pathname } = window.location;
    const newUrl = `${protocol}//${host}${pathname}?${newSearch}`;

    window.history.replaceState(null, '', newUrl);
};

updateUrlParams({ user: 1, uid: 18 });

// get url
// 获取url中的参数，并输出一个对象
function parseUrlParams() {
    const search = window.location.search;

    if (!search) {
        return {};
    }

    const params = {};
    const queryString = search.substr(1);
    const paramList = queryString.split('&');
    for (const param of paramList) {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    }

    return params;
};

const params = parseUrlParams();
console.log(params);