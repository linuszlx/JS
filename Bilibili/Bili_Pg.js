var body = $response.body;
var obj = JSON.parse(body);
obj.data.sections_v2 = [
      {
        "items" : [
          {
            "id" : 396,
            "title" : "离线缓存",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
            "common_op_item" : {

            },
            "uri" : "bilibili:\/\/user_center\/download"
          },
          {
            "id" : 397,
            "title" : "历史记录",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
            "common_op_item" : {

            },
            "uri" : "bilibili:\/\/user_center\/history"
          },
          {
            "id" : 398,
            "title" : "我的收藏",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/d79b19d983067a1b91614e830a7100c05204a821.png",
            "common_op_item" : {

            },
            "uri" : "bilibili:\/\/user_center\/favourite"
          },
          {
            "id" : 399,
            "title" : "稍后再看",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
            "need_login" : 1,
            "uri" : "bilibili:\/\/user_center\/watch_later",
            "common_op_item" : {

            }
          }
        ],
        "style" : 1,
        "button" : {

        }
      },
      {
        "title" : "更多服务",
        "items" : [
          {
            "id" : 407,
            "title" : "联系客服",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/7ca840cf1d887a45ee1ef441ab57845bf26ef5fa.png",
            "common_op_item" : {

            },
            "uri" : "bilibili:\/\/user_center\/feedback"
          },
          {
            "id" : 410,
            "title" : "设置",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
            "common_op_item" : {

            },
            "uri" : "bilibili:\/\/user_center\/setting"
          },
          {
            "id" : 741,
            "title" : "我的钱包",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/f416634e361824e74a855332b6ff14e2e7c2e082.png",
            "need_login" : 1,
            "uri" : "bilibili:\/\/bilipay\/mine_wallet",
            "common_op_item" : {

            }
          },
          {
            "id" : 742,
            "title" : "稿件管理",
            "icon" : "http:\/\/i0.hdslb.com\/bfs\/archive\/97acb2d8dec09b296a38f7f7093d651947d13b91.png",
            "need_login" : 1,
            "uri" : "bilibili:\/\/uper\/\/user_center\/manuscript-list\/",
            "common_op_item" : {

            }
          }       
        ],
        "style" : 2,
        "button" : {

        }
      }
    ];
$done({body: JSON.stringify(obj)});
