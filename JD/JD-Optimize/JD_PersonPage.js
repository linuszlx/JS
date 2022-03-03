let body = JSON.parse($response.body);

 delete body['floors'][2]['data']['logisticsInfo'];
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "commonBanner" || item.mId == "myownerfloor_wodezhuanshu" || item.mId == "recommendfloor"|| item.mId == "horizontalCard") {
      return false;
    }
    return true;
  });
$done({body: JSON.stringify(body)});
