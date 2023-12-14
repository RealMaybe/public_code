/**
 * 数组去重
 * @param { Array } array 需要去重的数组
 * @return { Array } 去重后的新数组
 */
function arrayDeduplication(array) {
    const newArr = [...array]; // 复制数组
    const isObject = val => typeof val === "object" && val !== null; // 检查是否为对象

    /**
     * 判断两个值是否相等
     * @param { any } val_1 任意值
     * @param { any } val_2 任意值
     * @returns { boolean } 返回是否一致的判定结果
     */
    function equals(val_1, val_2) {
        // 如果两个值中有一个不是对象，直接使用 Object.is 方法比较
        if (!isObject(val_1) || !isObject(val_2)) return Object.is(val_1, val_2);

        // 如果两个值相等，返回 true
        if (val_1 === val_2) return true;

        // 获取两个对象的 key 数组
        const val1Keys = Object.keys(val_1);
        const val2Keys = Object.keys(val_2);

        // 如果两个对象的 key 数量不一致，返回 false
        if (val1Keys.length !== val2Keys.length) return false;

        // 遍历 val_1 对象的 key
        for (let key of val1Keys) {
            // 如果 val_2 对象的 key 中不包含当前 key，返回 false
            if (!val2Keys.includes(key)) return false;

            // 递归判断当前 key 的值是否相等
            const res = equals(val_1[key], val_2[key]);
            if (!res) return false;
        }

        // 所有 key 的值都相等，返回 true
        return true;
    }

    // 数组去重
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            // 如果两个值相等，删除 newArr[j]，然后 j 减 1
            if (equals(newArr[i], newArr[j])) {
                newArr.splice(j, 1);
                j--;
            }
        }
    }

    return newArr; // 返回去重后的新数组
}