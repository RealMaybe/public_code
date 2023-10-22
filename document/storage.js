/**
 * 设置和获取存储数据
 * @param { string } key - 键名
 * @param { any } value - 值，可选。如果不传递该参数，则表示获取存储数据；如果传递该参数，则表示设置存储数据。
 * @param { string } storageType - 存储类型，可选值为"session"或其他。"session"表示使用会话级别的存储，其他值表示使用本地存储。
 * @returns { any } 如果是获取操作，返回保存的数据；如果是设置操作，无返回值。
 */

function StorageData(key, value, storageType) {
    if (window.plus && window.plus.storage) {
        /* 在H5+app环境中使用plus.storage */
        let storage = storageType === "session" ? plus.storage : plus.storage.getStorageSync();
        if (value !== undefined) {
            storage.setItem(key, value);
        } else {
            return storage.getItem(key);
        }
    } else {
        /* 在普通浏览器环境中使用localStorage和sessionStorage */
        let storage = storageType === "session" ? sessionStorage : localStorage;
        if (value !== undefined) {
            storage.setItem(key, JSON.stringify(value));
        } else {
            let storedValue = storage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null;
        }
    }
}

/* 压缩 */
function StorageData(e, t, s) {
    if (window.plus && window.plus.storage) {
        let o = "session" === s ? plus.storage : plus.storage.getStorageSync();
        if (void 0 === t) return o.getItem(e);
        o.setItem(e, t)
    } else {
        let o = "session" === s ? sessionStorage : localStorage;
        if (void 0 === t) { let t = o.getItem(e); return t ? JSON.parse(t) : null }
        o.setItem(e, JSON.stringify(t))
    }
}