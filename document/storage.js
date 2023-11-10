/**
 * 设置和获取存储数据
 * @param { string } key - 键名
 * @param { any } value - 值，可选。如果不传递该参数或传入值为undefined，则表示获取存储数据；如果传递该参数，则表示设置存储数据。
 * @param { string } storageType - 存储类型，可选值为"session"或其他。"session"表示使用会话级别的存储，其他值表示使用本地存储。
 * @returns { any } 如果是获取操作，返回保存的数据；如果是设置操作，无返回值。
 */

function StorageData(key, value, storageType) {
    if (window.plus && window.plus.storage) {
        /* 在H5+app环境中使用plus.storage */
        let storage = storageType === "session" ? plus.storage : plus.storage.getStorageSync();
        if (value != undefined) {
            storage.setItem(key, value);
        } else {
            return storage.getItem(key);
        }
    } else {
        /* 在普通浏览器环境中使用localStorage和sessionStorage */
        let storage = storageType === "session" ? sessionStorage : localStorage;
        if (value != undefined) {
            storage.setItem(key, JSON.stringify(value));
        } else {
            let storedValue = storage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null;
        }
    }
};

/**
 * 删除存储数据
 * @param { string } key - 键名
 * @param { string } storageType - 存储类型，可选值为"session"或其他。"session"表示使用会话级别的存储，其他值表示使用本地存储。
 * @returns 无返回值
 */
function DeleteStorageData(key, storageType) {
    if (window.plus && window.plus.storage) {
        /* 在H5+app环境中使用plus.storage */
        let storage = storageType === "session" ? plus.storage : plus.storage.getStorageSync();
        storage.removeItem(key);
    } else {
        /* 在普通浏览器环境中使用localStorage和sessionStorage */
        let storage = storageType === "session" ? sessionStorage : localStorage;
        storage.removeItem(key);
    }
};

/* 压缩 */
function StorageData(e, s, t) {
    if (window.plus && window.plus.storage) {
        let o = "session" === t ? plus.storage : plus.storage.getStorageSync();
        if (null == s) return o.getItem(e);
        o.setItem(e, s)
    } else {
        let o = "session" === t ? sessionStorage : localStorage;
        if (null == s) { let s = o.getItem(e); return s ? JSON.parse(s) : null }
        o.setItem(e, JSON.stringify(s))
    }
}

function DeleteStorageData(e, s) { window.plus && window.plus.storage ? ("session" === s ? plus.storage : plus.storage.getStorageSync()).removeItem(e) : ("session" === s ? sessionStorage : localStorage).removeItem(e) }