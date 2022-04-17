let body = JSON.parse($response.body);
  body.dns = body.dns.filter(function(item) {
    if (item.type == 1) {
      return false;
    }
    return true;
  });
$done({body: JSON.stringify(body)});
