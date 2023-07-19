/* set url */
function updateUrlParams(o, n, t) {
    const e = new URLSearchParams;
    for (const [o, t] of Object.entries(n)) e.append(o, t);
    const r = e.toString();
    let a, c, s, i = window.location.href;
    o ? t.indexOf("./") >= 0 ? ({ protocol: a, host: c, pathname: s } = new URL(t, i)) : ({ protocol: a, host: c, pathname: s } = new URL(t)) : ({ protocol: a, host: c, pathname: s } = window.location);
    const w = `${a}//${c}${s}?${r}`;
    if (o) return w;
    window.history.replaceState(null, "", w)
}

/* get url */
function parseUrlParams(o, n) {
    let t, e, r, a = window.location.href;
    const c = {};
    if (!(r = o ? (e = n.indexOf("./") >= 0 ? new URLSearchParams(new URL(n, a).search) : new URLSearchParams(new URL(n).search)).toString() : (t = window.location.search).substr(1))) return {};
    const s = r.split("&");
    for (const o of s) {
        const [n, t] = o.split("=");
        c[n] = decodeURIComponent(t)
    }
    return c
}