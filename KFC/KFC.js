if (!$response.body) $done({});
let obj = JSON.parse($response.body);
if (obj?.data) {
  obj.data.app6_bootStrapAd = {};
  obj.data.app6_secondFloor = {};
  obj.data.app6_atmosphere = {};
}
$done({body: JSON.stringify(obj)});
