const path1 = "exploreTab";
let url = $request.url;
let body = JSON.parse($response.body);
if (url.indexOf(path1) != -1) {
  delete body.data.stream;
  body.data.modules = body.data.modules.filter(function(item) {
    if (item.name == "精彩活动" || item.name == "米家上新") {
      return false;
    }
    return true;
  });                                       
}
$done({body: JSON.stringify(body)});
