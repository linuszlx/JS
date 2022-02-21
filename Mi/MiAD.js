var body = $response.body;
var obj = JSON.parse(body);
delete obj.data.banners;
$done({body: JSON.stringify(obj)});
