var body = $response.body;
var obj = JSON.parse(body);
obj.data.bootStrapAd = {
  };
$done({body: JSON.stringify(obj)});
