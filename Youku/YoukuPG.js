let body = JSON.parse($response.body);
  body.data.2019061000.data.nodes = body.data.2019061000.data.nodes.filter(function(item) {
    if (item.id == 6487 || item.id == 35640 || item.id == 36015){
      return true;
    }
    return false;
  });
$done({body: JSON.stringify(body)});
