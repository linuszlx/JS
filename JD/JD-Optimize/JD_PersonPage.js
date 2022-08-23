let body = JSON.parse($response.body);
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "commonBanner" || item.mId == "myownerfloor_wodezhuanshu" || item.mId == "recommendfloor"|| item.mId == "horizontalCard") {
      return false;
    }
    return true;
  });
if(body.floors.hasOwnProperty('1')){body['floors']['4']['data']['logisticsInfo'] = { }};
if(body.floors.hasOwnProperty('1')){body['floors']['4']['data']['commentRemindInfo'] = { }};
$done({body: JSON.stringify(body)});
