let body = JSON.parse($response.body);
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "commonBanner" || item.mId == "myownerfloor_wodezhuanshu" || item.mId == "recommendfloor"|| item.mId == "horizontalCard") {
      return false;
    }
    return true;
  });
response = { body: JSON.stringify(body) };
 body['floors'][i]['data']['logisticsInfo'] = {
      };
$done({body: JSON.stringify(body)});
