/*
 * Bilibili 国际版 Live Feed 请求重写脚本
 * 作用：拦截国际版 Live Feed 请求，替换为带有国内版合法参数及 sign 的请求
 */

let url = $request.url;

// 仅拦截 live feed 接口
if (url.includes("/xlive/app-interface/v2/index/feed")) {
    // 替换为国内版完整请求参数（保留抓包测通的国内参数与配套 sign）
    // 注意：这里填入你在 Surge 里重放成功的那整条完整国内 URL
    const cnUrl = "https://api.live.bilibili.com/xlive/app-interface/v2/index/feed?actionKey=appkey&appkey=27eb53fc9058f8c3&build=88800100&channel=AppStore&device=phone&mobi_app=iphone&platform=ios&scale=3&sign=cff210c5f073e9c64d61fe9707f1a17e";

    // 同步伪装关键请求头（规避 User-Agent 与 platform 冲突）
    let headers = $request.headers;
    headers["User-Agent"] = "bili-universal/88800100 CFNetwork/1.0 Darwin/27.0.0 os/ios model/iPhone 17 Pro Max mobi_app/iphone build/88800100 osVer/27.0.1 network/1 channel/AppStore";
    headers["app-key"] = "iphone";
    headers["env"] = "prod";

    $done({
        url: cnUrl,
        headers: headers
    });
} else {
    $done({});
}
