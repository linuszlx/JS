var body = $response.body;
var obj = JSON.parse(body);
obj.data.app6_bootStrapAd = {
  };
$done({body: JSON.stringify(obj)});
