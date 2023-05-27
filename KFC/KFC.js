var body = $response.body;
var obj = JSON.parse(body);
obj.data.app6_bootStrapAd = {
  };
obj.data.app6_secondFloor = {
  };
$done({body: JSON.stringify(obj)});
