var body = $response.body;
var obj = JSON.parse(body);
obj.data.bootStrapAd = {
  };
obj.data.secondFloor = {
  };
$done({body: JSON.stringify(obj)});
