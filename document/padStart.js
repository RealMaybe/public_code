/**
 * 自定义的 padStart 方法，用于在字符串的开头填充指定的字符，使字符串达到指定的长度。
 *
 * @param { string | number } str - 需要填充的字符串。
 * @param { number } targetLength - 填充后的目标长度。
 * @param { string } padString - 用于填充的字符。
 * @returns { string } - 填充后的字符串。
 */
function customPadStart(str, targetLength, padString = "0") {
    str = str.toString();

    // 将目标长度和当前字符串长度的差值计算出来
    const paddingLength = targetLength - str.length;

    // 如果需要填充的长度小于等于 0，或者没有指定填充字符，则直接返回原始字符串
    if (paddingLength <= 0 || padString.length === 0) return str

    // 将填充字符重复拼接到目标长度，然后通过 slice 方法截取需要的部分
    const paddedString = padString.repeat(Math.ceil(paddingLength / padString.length)).slice(0, paddingLength);

    // 返回填充后的字符串
    return paddedString + str;
};

// 位数不够往前补0 （其实相当于一个自定义的padStart）
const replenishZero = (num, len, zero = 0) => num.toString().padStart(len, zero);