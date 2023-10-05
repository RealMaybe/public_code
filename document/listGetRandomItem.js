function listGetRandomItem(list, remove) {
    let x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
};

/**
 * 这段JavaScript代码定义了一个函数listGetRandomItem，它接受两个参数：list和remove。
 * 函数的作用是从给定的列表中随机获取一个元素并返回。
 * 代码中使用了Math.random()函数生成一个0到1之间的随机数，将其乘以列表的长度list.length，并通过Math.floor()函数取整，得到一个范围在0到列表长度减1之间的随机整数x。这个整数指示了将要获取的随机元素在列表中的索引位置。
 * 如果remove参数为真，则使用数组的splice()方法从列表中移除并返回该随机元素。splice()方法会改变原始列表。
 * 如果remove参数为假，则直接从列表中获取并返回该随机元素，而不会改变原始列表。
 * 例如，假设传入一个列表[1, 2, 3, 4, 5]，remove参数为false，那么该函数将返回列表中的某个随机元素，例如3。如果remove参数为true，则返回的元素将从列表中移除。
 * 这个函数可以用于在给定列表中随机选择一个元素，可根据需求选择是否要移除选中的元素。
 */

/**
 * 
 */