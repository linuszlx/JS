var body = $response.body;
var obj = JSON.parse(body);
obj.data.itemList = [

    ];
$done({body: JSON.stringify(obj)});
