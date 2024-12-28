// 首先检查响应体是否为空
if (!$response.body) {
  // 如果响应体为空，直接结束并返回空的响应体
  $done({});
}

var body = $response.body;  // 获取响应体

// 使用 try-catch 来捕获 JSON 解析错误，确保在响应体无效时不抛出异常
var obj;
try {
  obj = JSON.parse(body);  // 尝试将响应体转换为 JSON 对象
} catch (e) {
  // 如果 JSON 解析失败，返回空响应体
  $done({});
}

// 检查 obj.data 是否存在，并且包含需要清空的字段
if (obj.data) {
  obj.data.app6_bootStrapAd = {};  // 清空 app6_bootStrapAd 字段
  obj.data.app6_secondFloor = {};  // 清空 app6_secondFloor 字段
  obj.data.app6_atmosphere = {};   // 清空 app6_atmosphere 字段
}

// 返回修改后的响应体
$done({body: JSON.stringify(obj)});
