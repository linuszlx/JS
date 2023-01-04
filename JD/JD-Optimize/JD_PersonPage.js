let body = JSON.parse($response.body);
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "commonBanner" || item.mId == "recommendfloor"|| item.mId == "horizontalCard" || item.mId == "buyOften" || item.mId == "platCard") {
      return false;
    }
    return true;
  });
if(body.floors.hasOwnProperty('1')){body['floors']['2']['data']['logisticsInfo'] = { }};
if(body.floors.hasOwnProperty('1')){body['floors']['2']['data']['commentRemindInfo'] = { }};
$done({body: JSON.stringify(body)});
