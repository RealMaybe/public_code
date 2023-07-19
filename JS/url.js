function updateUrlParams(t, n, o) {
    const e = new URLSearchParams;
    for (const [t, o] of Object.entries(n)) e.append(t, o);
    const a = e.toString();
    let r, c, s;
    ({ protocol: r, host: c, pathname: s } = t ? new URL(o) : window.location);
    const i = `${r}//${c}${s}?${a}`;
    if (t) return i;
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