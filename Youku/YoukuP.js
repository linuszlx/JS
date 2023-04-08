let body = JSON.parse($response.body);
  body.data.nodes = body.data.nodes.filter(function(item) {
    if (item.id == 28912 || item.id == 110429 || item.id == 36021 || item.id == 35640|| item.id == 36015){
      return true;
    }
    return false;
  });
$done({body: JSON.stringify(body)});
