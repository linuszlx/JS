let obj = JSON.parse($response.body);
if (request.body && request.body.length > 0) {
  if (obj?.host_list){
  obj.host_list=[  ] ;} };
$done({ body: JSON.stringify(obj) });
