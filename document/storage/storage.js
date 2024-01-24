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
        if (value != undefined) storage.setItem(key, value);
        else return storage.getItem(key);
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

/** */
const StorageAPI = (function(storageType) {
    let storage;

    // H5+app 环境
    if (window.plus && window.plus.storage) storage = storageType === "session" ? plus.storage : plus.storage.getStorageSync();

    // 浏览器环境
    storage = storageType === "session" ? sessionStorage : localStorage;

    return {
        StorageData: (key, value) => {
            if (value != undefined) {
                storage.setItem(key, JSON.stringify(value));
            } else {
                let storedValue = storage.getItem(key);
                return storedValue ? JSON.parse(storedValue) : null;
            }
        },
        DeleteStorageData: key => storage.removeItem(key)
    }
})();