let body = JSON.parse($response.body);
// 删除了“推荐服务”
body['data']['sections_v2'] = [
        "items" : [
          {
            "id" : 396,
            "title" : "离线缓存",
            "icon" : "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
            "common_op_item" : {

            },
            "uri" : "bilibili://user_center/download"
          },
          {
            "id" : 397,
            "title" : "历史记录",
            "icon" : "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
            "common_op_item" : {

            },
            "uri" : "bilibili://user_center/history"
          },
          {
            "id" : 398,
            "title" : "我的收藏",
            "icon" : "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
            "common_op_item" : {

            },
            "uri" : "bilibili://user_center/favourite"
          },
          {
            "id" : 399,
            "title" : "稍后再看",
            "icon" : "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
            "need_login" : 1,
            "uri" : "bilibili://user_center/watch_later",
            "common_op_item" : {

            }
          }
        ],
        "style" : 1,
        "button" : {

        }
      },
      {
        "button" : {
          "icon" : "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
          "style" : 1,
          "url" : "bilibili://uper/user_center/archive_selection",
          "text" : "有奖发布"
        },
        "style" : 1,
        "tip_icon" : "http://i0.hdslb.com/bfs/feed-admin/8ea7064cfee183b523dc97971bdb86a0bd569aeb.png",
        "title" : "创作中心",
        "type" : 1,
        "be_up_title" : "发布你的第一个视频",
        "tip_title" : "领限定头像挂件，赢活动奖金",
        "items" : [
          {
            "need_login" : 1,
            "display" : 1,
            "id" : 171,
            "title" : "创作首页",
            "global_red_dot" : 1,
            "uri" : "bilibili://uper/homevc",
            "icon" : "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png"
          },
          {
            "need_login" : 1,
            "display" : 1,
            "id" : 172,
            "title" : "稿件管理",
            "global_red_dot" : 1,
            "uri" : "bilibili://uper/user_center/archive_list",
            "icon" : "http://i0.hdslb.com/bfs/archive/97acb2d8dec09b296a38f7f7093d651947d13b91.png"
          },
          {
            "need_login" : 1,
            "display" : 1,
            "id" : 534,
            "title" : "打卡挑战",
            "global_red_dot" : 1,
            "uri" : "https://member.bilibili.com/york/punch-card?navhide=1",
            "icon" : "http://i0.hdslb.com/bfs/archive/68e553ee0675b45ebff98d2b0ec44501b558cc36.png"
          },
          {
            "need_login" : 1,
            "display" : 1,
            "id" : 174,
            "title" : "有奖活动",
            "global_red_dot" : 1,
            "uri" : "https://www.bilibili.com/blackboard/x/activity-tougao-h5/all",
            "icon" : "http://i0.hdslb.com/bfs/archive/7f4fa86d99bf3814bf10f8ee5d6c8c9db6e931c8.png"
          }
        ]
      },
      {
        "title" : "更多服务",
        "items" : [
          {
            "id" : 407,
            "title" : "联系客服",
            "icon" : "http://i0.hdslb.com/bfs/archive/7ca840cf1d887a45ee1ef441ab57845bf26ef5fa.png",
            "common_op_item" : {

            },
            "uri" : "bilibili://user_center/feedback"
          },
          {
            "id" : 410,
            "title" : "设置",
            "icon" : "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
            "common_op_item" : {

            },
            "uri" : "bilibili://user_center/setting"
          }
        ],
        "style" : 2,
        "button" : {

        }
      }
];
$done({body: JSON.stringify(body)});
