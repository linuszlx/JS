var body = $response.body;
var obj = JSON.parse(body);
obj.Variables.data={ };
$done({body: JSON.stringify(obj)});
