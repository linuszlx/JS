const path1 = "moments_v2\?";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.data = body.data.filter(function(item) {
    if (item.type == "videos") {
      return true;
    }
    return false;
  });                                       
}
$done({body: JSON.stringify(body)});
