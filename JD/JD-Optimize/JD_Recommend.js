var body = $response.body;
var obj = JSON.parse(body);
obj.wareInfoList = [ ];
$done({body: JSON.stringify(obj)});
