let body = JSON.parse($response.body);
  body.topBgImgBig = "";
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorOrder == -2 ||  item.floorOrder == 11 || item.floorOrder == 23 || item.floorOrder == 106 || item.floorOrder == 113 || item.floorOrder == 120 || item.floorOrder == 126 || item.floorOrder == 470 || item.floorOrder == 472 || item.floorOrder == 474|| item.floorOrder == 480 || item.floorOrder == 484 || item.floorOrder == 486 || item.floorOrder == 493|| item.floorId == 8407|| item.floorId == 497){
      return true;
    }
    return false;
  });
body['floorList']['1']['content']['compressBgPic'] = "";
body['floorList']['1']['content']['bgPic'] = "";
body['floorList']['1']['textColor'] = "";
$done({body: JSON.stringify(body)});
