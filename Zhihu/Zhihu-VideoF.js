var body = $response.body;
var obj = JSON.parse(body);
obj.data = [
  ];
obj.paging = {
    "is_end" : true,
    "previous" : "",
    "totals" : 0,
    "next" : "https:\/\/api.zhihu.com\/zvideo-tabs\/tabs\/choice\/feeds\/follow",
    "is_start" : true
  };
$done({body: JSON.stringify(obj)});
