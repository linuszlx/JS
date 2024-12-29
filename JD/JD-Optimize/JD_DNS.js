if (!$response.body) $done({});
let obj = JSON.parse($response.body);
obj.data.JDHttpToolKit = {
    };
$done({body: JSON.stringify(obj)});
