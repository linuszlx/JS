let body = JSON.parse($response.body);
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "basefloorinfo" || item.mId == "userinfo" || item.mId == "orderIdFloor"|| item.mId == "walletIdFloor"|| item.mId == "sortIcon"|| item.mId == "attentionFloor") {
      return true;
    }
    return false;
  });
if(body['floors']['2']['data'].hasOwnProperty("logisticsInfo")){body['floors']['2']['data']['logisticsInfo'] = { }};
$done({body: JSON.stringify(body)});
