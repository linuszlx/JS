const path1 = "moments_v2\?";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.data = body.data.filter(function(item) {
    if (item.type == "zvideo") {
      return false;
    }
    return true;
  });                                       
}
$done({body: JSON.stringify(body)});
