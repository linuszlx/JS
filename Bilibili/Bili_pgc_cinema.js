let body = JSON.parse($response.body);
  if(body.result.modules.hasOwnProperty('3')){body.result.modules = body.result.modules.filter(function(item) {
    if (item.module_id == 219) {
      return false;
    }
    return true;
  })};
$done({body: JSON.stringify(body)});
