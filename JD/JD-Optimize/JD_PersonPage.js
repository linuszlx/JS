if (!$response.body) $done({});
let body = JSON.parse($response.body);
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "basefloorinfo" || item.mId == "recommendfloor"|| item.mId == "horizontalCard" || item.mId == "buyOften" ) {
      return false;
    }
    return true;
  });
if(body.floors.hasOwnProperty('1')){body['floors']['1']['data']['logisticsInfo'] = { }};
if(body.floors.hasOwnProperty('1')){body['floors']['1']['data']['commentRemindInfo'] = { }};
$done({body: JSON.stringify(body)});
