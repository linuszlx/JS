let body = JSON.parse($response.body);
  body.data = body.data.filter(function(item) {
    if (item.target_type == "zvideo") {
      return false;
    }
    return true;
  });                                       
$done({body: JSON.stringify(body)});
