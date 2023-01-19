var body = $response.body;
var obj = JSON.parse(body);
obj.Variables.extgroupidsdata = [
      {
        "groupid" : "60",
        "groupicon" : null,
        "grouptitle" : "鉴赏家"
      },
      {
        "groupid" : "15",
        "groupicon" : null,
        "grouptitle" : null
      }
    ];
obj.Variables.extgroupvip = "4";
$done({body: JSON.stringify(obj)});
