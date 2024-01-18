/**
 * 用于在字符串的开头或末尾填充指定的字符，使字符串达到指定的长度。
 * @param { string | number } value - 需要填充的字符串。
 * @param { number } targetLength - 填充后的目标长度。
 * @param { string | number } padString - 用于填充的字符。
 * @param { boolean | number } place - 填充位置
 * @returns { string } - 填充后的字符串。
 */
function padFill(value, targetLength, padString, place = 1) {
    // 转换为字符串，方便操作
    value = value.toString();
    padString = padString.toString();

    // 将目标长度和当前字符串长度的差值计算出来
    const paddingLength = targetLength - value.length;

    // 如果需要填充的长度小于等于 0，或者没有指定填充字符，则直接返回原始字符串
    if (paddingLength <= 0 || padString.length === 0) return value;

    // 将填充字符重复拼接到目标长度，然后通过 slice 方法截取需要的部分
    const paddedString = padString.repeat(Math.ceil(paddingLength / padString.length)).slice(0, paddingLength);

    if (place) return paddedString + value;
    else return value + paddedString;
}