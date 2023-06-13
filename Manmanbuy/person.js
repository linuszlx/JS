var body = $response.body;
var obj = JSON.parse(body);
obj.data.friendChannel = { };
obj.data.searchBeginScene = { };
obj.data.hongbaoconfig_3642 = { };
obj.data.commonChannel = { };
obj.data.bcjChannel = { };
$done({body: JSON.stringify(obj)});
