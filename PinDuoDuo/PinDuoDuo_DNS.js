if (!$response.body) $done({});
let obj = JSON.parse($response.body);
if (request.body && request.body.length > 0) {
  obj.host_list=[  ] } ;
$done({ body: JSON.stringify(obj) });
