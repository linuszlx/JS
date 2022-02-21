var body = $response.body;
var obj = JSON.parse(body);
obj.code = -404;
obj.message = "啥都木有";
obj.data = null;

$done({body: JSON.stringify(obj)});
