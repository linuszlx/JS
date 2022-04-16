let body = JSON.parse($response.body);
  body.result.modules = body.result.modules.filter(function(item) {
    if (item.module_id == 241 || item.module_id == 1545 || item.module_id == 1283) {
      return false;
    }
    return true;
  });
$done({body: JSON.stringify(body)});
