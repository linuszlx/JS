if (!$response.body) $done({});
let obj = JSON.parse($response.body);
obj.data.contentList = [

  ];
$done({body: JSON.stringify(obj)});
