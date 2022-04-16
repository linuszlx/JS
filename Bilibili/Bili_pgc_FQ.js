let body = JSON.parse($response.body);
  body.result.modules = body.result.modules.filter(function(item) {
    if (item.size == 1058) {
      return false;
    }
    return true;
  });
$done({body: JSON.stringify(body)});
