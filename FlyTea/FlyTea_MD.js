var body = $response.body;
var obj = JSON.parse(body);
obj.Variables.extgroupidsdata = [
      {
        "groupid" : "52",
        "groupicon" : null,
        "grouptitle" : null
      },
      {
        "groupid" : "30",
        "groupicon" : null,
        "grouptitle" : null
      }
    ];
obj.Variables.extgroupvip = "4";
$done({body: JSON.stringify(obj)});
