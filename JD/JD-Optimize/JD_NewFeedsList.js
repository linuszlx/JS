if (!$response.body) $done({});
var body = $response.body;
var obj = JSON.parse(body);
obj.data.list = [

  ];
$done({body: JSON.stringify(obj)});
