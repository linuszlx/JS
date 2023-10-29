var body = $response.body;
var obj = JSON.parse(body);
obj.isPremium = true;
$done({body: JSON.stringify(obj)});
