/* 代码压缩 */
function updateUrlParams(t, n, o) {
    const e = new URLSearchParams;
    for (const [t, o] of Object.entries(n)) e.append(t, o);
    const r = e.toString();
    let s, a, c;
    ({ protocol: s, host: a, pathname: c } = t ? window.location : new URL(o));
    const i = `${s}//${a}${c}?${r}`;
    if (!t) return i;
    window.history.replaceState(null, "", i)
}

function parseUrlParams(t, n) {
    let o, e;
    const r = {};
    if (!(e = t ? new URLSearchParams(new URL(n).search).toString() : (o = window.location.search).substr(1))) return {};
    const s = e.split("&");
    for (const t of s) {
        const [n, o] = t.split("=");
        r[n] = decodeURIComponent(o)
    }
    return r
}