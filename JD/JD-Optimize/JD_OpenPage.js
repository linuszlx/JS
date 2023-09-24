const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);
if (url.indexOf(path1) != -1) {
  body.topBgImgBig = "https:\/\/m15.360buyimg.com\/mobilecms\/s1125x939_jfs\/t1\/118114\/21\/34437\/69326\/64491c10F39c4e579\/5e4591bc1f8678e6.png";
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorOrder == -2 || item.floorOrder == 11 || item.floorOrder == 23 || item.floorId == 470 || item.floorId == 472  || item.floorId == 474 || item.floorId == 482 || item.floorId == 484 || item.floorId == 488 || item.floorId == 8407){
      return true;
    }
    return false;
  });                                       
}
$done({body: JSON.stringify(body)});
