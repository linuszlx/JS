if (!$response.body) $done({})
var body = $response.body;  // 获取响应体
var obj = JSON.parse(body);  // 将响应体转换为 JSON 对象

// 检查 obj.data 是否存在，并且包含需要清空的字段
if (obj.data) {
  obj.data.app6_bootStrapAd = {};  // 清空 app6_bootStrapAd 字段
  obj.data.app6_secondFloor = {};  // 清空 app6_secondFloor 字段
  obj.data.app6_atmosphere = {};   // 清空 app6_atmosphere 字段
}

$done({body: JSON.stringify(obj)});  // 返回修改后的响应体
