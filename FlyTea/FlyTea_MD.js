var body = $response.body;
var obj = JSON.parse(body);
obj.Variables.extgroupvip = "4";
$done({body: JSON.stringify(obj)});
