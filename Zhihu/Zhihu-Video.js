var body = $response.body;
var obj = JSON.parse(body);
obj.data = [
    {
      "tab_id" : 2,
      "normal" : {
        "type" : "text",
        "title" : "知识区"
      },
      "default_selected" : true,
      "selected" : {
        "type" : "text",
        "title" : "知识区"
      },
      "identity" : "recommend",
      "type" : "feed",
      "url" : ""
    }
  ];

$done({body: JSON.stringify(obj)});
