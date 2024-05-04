let body = JSON.parse($response.body);
  if(body.result.modules.hasOwnProperty('3')){body.result.modules = body.result.modules.filter(function(item) {
    if (item.module_id == 248 ||  item.module_id == 1284) {
      return false;
    }
    return true;
  })};
  if(body.result.modules.hasOwnProperty('3')){body['result']['modules']['1']['items']= body['result']['modules']['1']['items'].filter(function(item) {
    if (item.title == "纪录片" ||  item.title == "电影"||  item.title == "电视剧"||  item.title == "综艺") {
      return true;
    }
    return false;
  })};
$done({body: JSON.stringify(body)});
