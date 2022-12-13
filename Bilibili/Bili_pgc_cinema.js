let body = JSON.parse($response.body);
  body.result.modules = body.result.modules.filter(function(item) {
    if (item.module_id == 83 || item.module_id == 241) {
      return false;
    }
    return true;
  });
$done({body: JSON.stringify(body)});
