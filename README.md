# 公共代码 Public Code

## 介绍

public公共代码，多个内容中均可调用，更新频率随缘。

## 安装教程

使用git将相关代码下载至本地后，选择对应的代码模块引入自己所写的项目即可。

## 参与贡献

- RealMaybe

## 更新日志

- 2023/7/17
    更新内容：
    1. url.js 大更新
        1. 将原本url.js修改为三个文件，分别为
            - page url this.js
            - page url other.js
            - page url all.js
        2. page url this.js中保留了原本代码，用于获取和修改当前页面的url地址
        3. page url other.js中为新的代码内容，用于获取和修改自定义页面的url地址
        4. page url all.js中为兼容代码，传入布尔值用于判断，可获取和修改当前或指定页面url地址
            - 设定指定url地址时，最后内容建议设定到指定的超链接标签中，或通过js跳转
    2. 加入index.html文件，内容空白
    3. 加入text.html文件，用于测试，该文件不会上传至git仓库
- 本更新日志从2023/7/17开始记录，之前的更新内容不再记录。
- 原有内容记录

```txt
public
├─document
│   ├─canvas code.js
│   ├─code.js
│   ├─countdown.js
│   ├─ip.js
│   ├─listGetRandomltem.js
│   ├─nowTime.js
│   ├─page url all.js
│   ├─page url other.js
│   ├─page url this.js
│   ├─paita.js
│   ├─random.js
│   ├─textarea.js
│   └─totop.js
├─jQuery插件
│   ├─全屏轮播
│   ├─打字机效果.html
│   ├─jquery tab1.html
│   ├─jquery tab2.html
│   ├─jquery轮播图 - 1.html
│   └─jquery轮播图 - 2.html
└
```
