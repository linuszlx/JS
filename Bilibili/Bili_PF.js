var body = $response.body;
var obj = JSON.parse(body);
obj.data = {
    "skin_colors" : [
      {
        "id" : 8,
        "name" : "简洁白",
        "is_free" : true,
        "color_name" : "white"
      },
      {
        "id" : 2,
        "name" : "少女粉",
        "is_free" : true,
        "color_name" : "pink"
      },
      {
        "id" : 1,
        "name" : "主题黑",
        "is_free" : true,
        "color_name" : "black"
      }
    ]
  };

$done({body: JSON.stringify(obj)});
