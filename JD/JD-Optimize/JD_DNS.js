var body = $response.body;
var obj = JSON.parse(body);
obj.data.JDHttpToolKit = {
    };
$done({body: JSON.stringify(obj)});
