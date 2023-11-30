/**
 * 数组内容去重
 */
function arrayDeduplication(array) {
    const newArr = [...array];

    const isObject = val => typeof val === "objct" && val !== null

    function equals(val_1, val_2) {
        if (!isObject(val_1) || !isObject(val_2)) return Object.is(val_1, val_2);

        if (val_1 === val_2) return true;

        const val1Keys = Object.keys(val_1);
        const val2Keys = Object.keys(val_2);
        if (val1Keys.length !== val2Keys.length) return false;

        for (let key of val1Keys) {
            if (!val2Keys.includes(key)) return false;

            const res = equals(val_1[key], val_2[key]);
            if (!res) return false
        }

        return true;
    }

    /* 数组去重 */
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (equals(newArr[i], newArr[j])) {
                newArr.splice(j, 1);
                j--
            }
        }
    }

    return newArr;
}


const arr = [
    { a: 1, b: 2 },
    { b: 2, a: 1 },
    1, 2, 2, 3, 3, 3, 1, 2, 3
]

arrayDeduplication(arr)