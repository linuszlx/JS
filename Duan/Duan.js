const url = $request.url;
let obj = JSON.parse($response.body); // 解析 JSON

if (url.indexOf('subscription') != -1) {
    // 修改 JSON 对象中的字段
    obj.state = "active";
} else if (url.indexOf('user/content') != -1) {
    // 修改 JSON 对象中的字段
    obj.allow = true;
}

$done({ body: JSON.stringify(obj) }); // 将修改后的对象转为字符串并返回
