let body = JSON.parse($response.body);
  body.data = body.data.filter(function(item) {
    if (item.type == "videos") {
      return false;
    }
    return true;
  });                                       
$done({body: JSON.stringify(body)});
