let body = JSON.parse($response.body);
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "basefloorinfo" || item.mId == "userinfo" || item.mId == "orderIdFloor"|| item.mId == "walletIdFloor"|| item.mId == "sortIcon"|| item.mId == "attentionFloor") {
      return false;
    }
    return true;
  });
$done({body: JSON.stringify(body)});
