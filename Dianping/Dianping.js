const headers = $request.headers; // 获取请求头
const headopt = headers["M-SHARK-TRACEID"] || headers["m-shark-traceid"]; // 检查特定字段

if (headopt) {
  // 如果请求头包含广告标志字段，返回 204 No Content
  $done({
    status: 204,
    headers: {}, // 空头部
    body: ""     // 无内容
  });
} else {
  // 如果没有广告特征，允许正常请求
  $done({});
}
