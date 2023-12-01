/**
 * 数组去重
 * @param { Array } t - 需要去重的数组
 * @return { Array } - 去重后的新数组
 */
function arrayDeduplication(t) {
    const e = [...t],
        n = t => "object" == typeof t && null !== t;

    function r(t, e) {
        if (!n(t) || !n(e)) return Object.is(t, e);
        if (t === e) return !0;
        const f = Object.keys(t),
            i = Object.keys(e);
        if (f.length !== i.length) return !1;
        for (let n of f) { if (!i.includes(n)) return !1; if (!r(t[n], e[n])) return !1 }
        return !0
    }
    for (let t = 0; t < e.length; t++)
        for (let n = t + 1; n < e.length; n++) r(e[t], e[n]) && (e.splice(n, 1), n--);
    return e.sort((t, e) => t - e)
}