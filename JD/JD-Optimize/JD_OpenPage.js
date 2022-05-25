const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorId == 9493 || item.floorId == 9915 || item.floorId == 7531 || item.floorId == 10011 || item.floorId == 9918 || item.floorId == 7096 || item.floorId == 6859 || item.floorId == 3112 || item.floorId == 9516 || item.floorId == 8407){
      return false;
    }
    return true;
  });                                       
}
$done({body: JSON.stringify(body)});
