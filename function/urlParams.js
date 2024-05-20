class URLParams {
    constructor() {
        this.params = {}; // 初始化一个空对象，用于存储URL中的参数
        this.url = window.location.href; // 获取当前页面的URL
        this.parse(); // 调用parse方法，解析URL中的参数
    }

    // 解析URL中的参数
    parse() {
        let params = this.url.split("?")[1]; // 获取URL中的参数部分

        if (params) { // 如果存在参数
            params = params.split("&"); // 以"&"符号分割参数

            for (let i = 0; i < params.length; i++) { // 遍历参数数组
                let param = params[i].split("="); // 以"="符号分割参数名和参数值
                this.params[param[0]] = param[1]; // 将参数名和参数值存入params对象中
            }
        }
    }

    // 获取指定参数名对应的参数值
    get(key) {
        return this.params[key]; // 返回params对象中指定参数名对应的参数值
    }
}