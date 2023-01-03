const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);
if (url.indexOf(path1) != -1) {
  body.topBgImgBig = "https:\/\/m.360buyimg.com\/mobilecms\/jfs\/t16789\/324\/2566217976\/2179\/58b27e89\/5af962e6N61fbd832.png";
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorOrder == -2 || item.floorOrder == 11 || item.floorOrder == 23 || item.floorOrder == 494){
      return true;
    }
    return false;
  });                                       
}
$done({body: JSON.stringify(body)});
