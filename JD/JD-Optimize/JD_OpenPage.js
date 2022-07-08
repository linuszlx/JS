const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);
if (url.indexOf(path1) != -1) {
  body.topBgImgBig = "https:\/\/m15.360buyimg.com\/mobilecms\/s1125x939_jfs\/t1\/48405\/31\/18164\/106005\/6287a362E177f36e0\/a487d9431b95f35b.png!q70.jpg";
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorId == 9924 || item.floorId == 9421 || item.floorId == 9831 || item.floorId == 8407){
      return true;
    }
    return false;
  });                                       
}
$done({body: JSON.stringify(body)});
