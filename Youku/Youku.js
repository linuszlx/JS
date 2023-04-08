if(body['data']['2019061000']['data']['nodes'].hasOwnProperty('2')){body['data']['2019061000']['data']['nodes'] = body['data']['2019061000']['data']['nodes'].filter(function(item) {
    if (item.data.title == "精选" || item.data.title == "电视剧" || item.data.title == "电影" || item.data.title == "综艺" || item.data.title == "动漫" || item.data.title == "少儿" || item.data.title == "纪录片" ||){
      return true;
    }
    return false;
  })};
$done({body: JSON.stringify(body)});
