let body = JSON.parse($response.body);
  body['data']['2019061000']['data']['nodes'][0]['nodes']= body['data']['2019061000']['data']['nodes'][0]['nodes'].filter(function(item) {
    if (item.id == 28912 || item.id == 110429 || item.id == 36021 || item.id == 35640|| item.id == 36015){
      return true;
          }
    return false;
  });
$done({body: JSON.stringify(body)});
