const path1 = "welcomeHome";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorId == 8749 || item.floorId == 8259 || item.floorId == 8110 || item.floorId == 8111|| item.floorId == 9200|| item.floorId == 7096 || item.floorId == 3112) {
      return true;
    }
    return false;
  });                                       
}
$done({body: JSON.stringify(body)});
