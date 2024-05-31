class Solution {
    constructor() {}

    intToRoman(num) {
        const c = [
            ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
            ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
            ["", "M", "MM", "MMM"]
        ];

        let roman = "";
        roman += c[3][Math.floor(num / 1000) % 10];
        roman += c[2][Math.floor(num / 100) % 10];
        roman += c[1][Math.floor(num / 10) % 10];
        roman += c[0][num % 10];

        return roman;
    }
}

// 使用示例  
let sol = new Solution();
console.log(sol.intToRoman(100)); // 输出应为 "MCCXXXIV"