/**
 * StorageAPI 构造函数
 * @author RealMaybe
 * @constructor
 * @param { string } storageType - 存储类型，可以是 "session" 或 "local"，不传值则默认为"local"
 */
function StorageAPI(storageType) {
    // 根据环境和存储类型选择合适的存储对象
    let storage = (function() {
        // 浏览器环境
        if (!window.plus)
            return storageType === "session" ? sessionStorage : localStorage;

        // H5+app 环境
        else if (window.plus && window.plus.storage)
            return storageType === "session" ? plus.storage : plus.storage.getStorageSync();

        // 其他情况
        else
            throw new Error("Unknown environment, unable to determine storage method.");
    })()

    /* ========== */

    // 公共方法
    function removeItem(key) { key ? storage.removeItem(key) : storage.clear() }

    /* ========== */

    /**
     * 设置或获取存储数据
     * @function Storage
     * @param { string } key - 数据的键名
     * @param { any } value - 要存储的值 (可选)
     * @returns { void | any } - 如果提供了值，则设置键的值；如果没有提供值，则返回键的存储值
     */
    this.Storage = function(key, value) {
        if (key && !value) {
            let storedValue = storage.getItem(key);
            return JSON.parse(storedValue);
        } else if (key && value !== undefined) {
            storage.setItem(key, JSON.stringify(value));
        } else {
            let storedValue = storage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null;
        }
    }


    /**
     * 删除存储数据
     * @function Delete
     * @param { string } key - 要删除的数据的键名
     * @returns { void }
     */
    this.Delete = function(key) {
        try {
            removeItem(key)
        } catch (error) {
            console.error("Error deleting item from storage:", error)
        }
    }


    /**
     * 删除存储的所有数据
     * @function Clean
     * @returns { void }
     */
    this.Clean = function() {
        try {
            removeItem()
        } catch (error) {
            console.error("Error cleaning storage:", error)
        }
    }
}

export default StorageAPI