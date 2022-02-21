var body = $response.body;
var obj = JSON.parse(body);
obj.Variables.data.threaddetail.tagadv = "";
obj.Variables.data.threaddetail.bottomadv = "";
obj.Variables.data.threaddetail.middleadv = "";
obj.Variables.data.threaddetail.pingyouadv = "";
$done({body: JSON.stringify(obj)});
