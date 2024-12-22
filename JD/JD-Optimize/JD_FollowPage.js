if (!$response.body) $done({});
var body = $response.body;
var obj = JSON.parse(body);
obj.data.contentList = [

  ];
$done({body: JSON.stringify(obj)});
