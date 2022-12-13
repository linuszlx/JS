var body = $response.body;
var obj = JSON.parse(body);
obj.data = {
    "tab" : [
      {
        "id" : 731,
        "tab_id" : "直播tab",
        "name" : "直播",
        "uri" : "bilibili:\/\/live\/home",
        "pos" : 1
      },
      {
        "id" : 477,
        "tab_id" : "推荐tab",
        "default_selected" : 1,
        "name" : "推荐",
        "uri" : "bilibili:\/\/pegasus\/promo",
        "pos" : 2
      },
      {
        "id" : 478,
        "tab_id" : "热门tab",
        "name" : "热门",
        "uri" : "bilibili:\/\/pegasus\/hottopic",
        "pos" : 3
      },
      {
        "id" : 101,
        "tab_id" : "bangumi",
        "name" : "动画",
        "uri" : "bilibili:\/\/pgc\/home",
        "pos" : 4
      },
      {
        "id" : 151,
        "tab_id" : "film",
        "name" : "影视",
        "uri" : "bilibili:\/\/pgc\/cinema-tab",
        "pos" : 5
      }
    ],
    "top" : [
      {
        "id" : 481,
        "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
        "tab_id" : "消息Top",
        "name" : "消息",
        "uri" : "bilibili:\/\/link\/im_home",
        "pos" : 1
      }
    ],
    "top_more" : [
      {
        "id" : 740,
        "icon" : "http:\/\/i0.hdslb.com\/bfs\/feed-admin\/f95dfa31c793c857af6e7b65b5387a05f30d31ba.png",
        "name" : "更多分区",
        "uri" : "bilibili:\/\/main\/top_category",
        "pos" : 1
      }
    ],
    "top_left" : {
      "exp" : 0,
      "head_tag" : "",
      "url" : "bilibili:\/\/root?bottom_tab_id=我的Bottom",
      "goto" : 1
    },
    "bottom" : [
      {
        "uri" : "bilibili:\/\/main\/home\/",
        "tab_id" : "首页Bottom",
        "pos" : 1,
        "id" : 486,
        "icon_selected" : "http:\/\/i0.hdslb.com\/bfs\/archive\/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png",
        "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/63d7ee88d471786c1af45af86e8cb7f607edf91b.png",
        "name" : "首页"
      },
      {
        "uri" : "bilibili:\/\/following\/home\/",
        "tab_id" : "dynamic",
        "pos" : 2,
        "id" : 488,
        "icon_selected" : "http:\/\/i0.hdslb.com\/bfs\/archive\/25b658e1f6b6da57eecba328556101dbdcb4b53f.png",
        "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png",
        "name" : "动态"
      },
      {
        "uri" : "bilibili:\/\/user_center\/",
        "tab_id" : "我的Bottom",
        "pos" : 3,
        "id" : 489,
        "icon_selected" : "http:\/\/i0.hdslb.com\/bfs\/archive\/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
        "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
        "name" : "我的"
      }
    ]
  };

$done({body: JSON.stringify(obj)});
