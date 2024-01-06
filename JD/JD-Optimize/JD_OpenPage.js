let body = JSON.parse($response.body);
  body.topBgImgBig = "https:\/\/m15.360buyimg.com\/mobilecms\/s1125x939_jfs\/t1\/191738\/33\/41631\/23777\/654490b5Fe94ac65f\/47b3af68b5133e9e.jpg!q70.jpg.dpg.webp";
  body.webViewFloorList = [];
  body.futureFloorList = []; 
  body.floorList = body.floorList.filter(function(item) {
    if (item.floorOrder == -2 ||  item.floorOrder == 11 || item.floorOrder == 23 || item.floorOrder == 106 || item.floorOrder == 113 || item.floorOrder == 120 || item.floorOrder == 126 || item.floorOrder == 470 || item.floorOrder == 472 || item.floorOrder == 474 || item.floorOrder == 493|| item.floorId == 8407){
      return true;
    }
    return false;
  });
$done({body: JSON.stringify(body)});
