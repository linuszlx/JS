if (!$response.body) $done({});
var body = $response.body;
var obj = JSON.parse(body);
obj.data.app6_bootStrapAd = {
  };
obj.data.app6_secondFloor = {
  };
obj.data.app6_atmosphere = {
  };
$done({body: JSON.stringify(obj)});
