const url = $request.url;
const headers = $request.headers;
const headopt = headers["M-SHARK-TRACEID"] || headers["m-shark-traceid"];
let body = ""; // 根据你的需求填充 `body` 内容

if (headopt != null) {
  // 如果有指定的 header，返回 204 No Content 响应
  $done({ status: "HTTP/1.1 204 No Content", body: "", headers: {} });
} else {
  // 如果没有指定的 header，返回自定义的响应 body
  $done({ response: { body } });
}
