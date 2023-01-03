const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);
if (url.indexOf(path1) != -1) {
  body.topBgImgBig = "https:\/\/m15.360buyimg.com\/mobilecms\/s1125x939_jfs\/t1\/129285\/30\/21934\/123475\/62013269E02faf891\/ee9f510a656de1dc.png!q70.jpg";
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorOrder == -2 || item.floorOrder == 11 || item.floorOrder == 23 || item.floorId == 8407){
      return true;
    }
    return false;
  });                                       
}
$done({body: JSON.stringify(body)});
