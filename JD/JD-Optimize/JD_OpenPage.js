const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);
if (url.indexOf(path1) != -1) {
  body.topBgImgBig = ;
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorId == 9924 || item.floorId == 9421 || item.floorId == 10309 || item.floorId == 8407){
      return true;
    }
    return false;
  });                                       
}
$done({body: JSON.stringify(body)});
