let body = JSON.parse($response.body);
  body.detail.[0].items = body.detail.[0].items.filter(function(item) {
    if (item.name == "智家" || item.name == "我的") {
      return false;
    }
    return true;
  });
$done({body: JSON.stringify(body)});
