let obj = JSON.parse($response.body);
console.log("原始响应体:", obj); // 查看原始响应体

if (request.body && request.body.length > 0) {
  if (obj?.host_list) {
    console.log("清空 host_list");
    obj.host_list = [];
  }
};

console.log("修改后的响应体:", obj); // 查看修改后的响应体
$done({ body: JSON.stringify(obj) });
