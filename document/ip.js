// 定义一个函数来获取 IP 地址，通过回调函数返回 IP 地址
function getIPs(callback) {
    // 用于存储重复的 IP 地址
    var ip_dups = {};

    // 获取浏览器中支持的 RTCPeerConnection 对象
    var RTCPeerConnection = window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;

    // 检查是否使用了 WebKit 引擎
    var useWebKit = !!window.webkitRTCPeerConnection;

    // 媒体约束，用于创建 RTCPeerConnection 对象
    var mediaConstraints = { optional: [{ RtpDataChannels: true }] };

    // 定义 ICE 服务器，用于网络协商
    var servers = {
        iceServers: [{
            urls: "stun:stun.services.mozilla.com" // Mozilla 的 STUN 服务器
        }, {
            urls: "stun:stun.l.google.com:19302" // Google 的 STUN 服务器
        }]
    };

    // 创建 RTCPeerConnection 对象
    var pc = new RTCPeerConnection(servers, mediaConstraints);

    // 处理候选者，提取 IP 地址
    function handleCandidate(candidate) {
        // 定义正则表达式来匹配 IP 地址
        var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
        var hasIp = ip_regex.exec(candidate);

        if (hasIp) {
            var ip_addr = ip_regex.exec(candidate)[1];
            // 将非重复的 IP 地址传递给回调函数
            if (ip_dups[ip_addr] === undefined) callback(ip_addr);
            ip_dups[ip_addr] = true;
        }
    };

    // 当生成候选者时，调用此函数
    pc.onicecandidate = ice => { if (ice.candidate) handleCandidate(ice.candidate.candidate) };

    // 创建一个数据通道来触发网络协商过程
    pc.createDataChannel("");

    // 创建一个 SDP 会话描述协议
    pc.createOffer(result => {
        pc.setLocalDescription(result, () => {}, () => {});
    }, () => {});

    // 一秒后，拆分 SDP 中的行，并找到包含 "a=candidate:" 的行，进一步处理候选者
    setTimeout(() => {
        var lines = pc.localDescription.sdp.split('\n');
        lines.forEach(line => { if (line.indexOf('a=candidate:') === 0) handleCandidate(line) });
    }, 1000);
};

// 调用 getIPs 函数，并在回调函数中打印 IP 地址
getIPs(ip => console.log('ip', ip));