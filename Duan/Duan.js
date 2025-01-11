const url = $request.url;
let body = $response.body; // 获取响应体作为字符串

if (url.indexOf('subscription') != -1) {
    // 进行字符串替换
    body = body.replace(/state="inactive/g, 'state="active');
} else if (url.indexOf('user/content') != -1) {
    // 进行字符串替换
    body = body.replace(/allow":false/g, 'allow":true');
}

$done({ body: body }); // 返回修改后的响应体
