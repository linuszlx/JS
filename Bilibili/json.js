// 脚本引用 https://raw.githubusercontent.com/RuCu6/Loon/main/Scripts/bilibili/json.js
// 2024-11-08 12:30

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/x/resource/show/tab/v2")) {
  // 底部选项卡
  if (obj?.data?.bottom?.length > 0) {
    const sortLists = ["首页", "动态", "我的"];
    obj.data.bottom = obj.data.bottom
      .filter((i) => sortLists?.includes(i?.name))
      .sort((a, b) => sortLists.indexOf(a?.name) - sortLists.indexOf(b?.name));
  }
  // 首页导航栏
  if (obj?.data?.tab?.length > 0) {
    const sortLists = ["直播", "推荐", "热门", "动画", "影视"];
    obj.data.tab = obj.data.tab
      .filter((i) => sortLists?.includes(i?.name))
      .sort((a, b) => sortLists.indexOf(a?.name) - sortLists.indexOf(b?.name));
  }
  // 右上角按钮
  if (obj?.data?.top?.length > 0) {
    obj.data.top = obj.data.top.filter((i) => i?.name === "消息");
    if (obj?.data?.top?.[0]?.pos) {
      obj.data.top[0].pos = 1;
    }
  }
} else if (url.includes("/x/v2/search/square")) {
  // 搜索框
  if (obj?.data) {
    obj.data = { type: "history", title: "搜索历史", search_hotword_revision: 2 };
  }
} else if (url.includes("/x/v2/account/mine")) {
  // 我的页面
  const del = ["ipad_upper_sections", "rework_v1", "vip_section", "vip_section_v2"];
  for (let i of del) {
    delete obj.data[i]; // 不必要项目
  }
  // iPad 我的页面
  if (obj?.data?.ipad_recommend_sections?.length > 0) {
    const itemList = [789, 790]; // 789我的关注 790我的消息 791我的钱包 792直播中心 793大会员 794我的课程 2542我的游戏
    obj.data.ipad_recommend_sections = obj.data.ipad_recommend_sections.filter((i) => itemList?.includes(i.id));
  }
  if (obj?.data?.ipad_more_sections?.length > 0) {
    const itemList = [797, 798]; // 797我的客服 798设置 1070青少年守护
    obj.data.ipad_more_sections = obj.data.ipad_more_sections.filter((i) => itemList?.includes(i.id));
  }
  // iPhone 我的页面
  if (obj?.data?.sections_v2?.length > 0) {
    let newSects = [];
    for (let item of obj.data.sections_v2) {
      if (item?.button) {
        delete item.button;
      }
      if (item?.style) {
        if (item?.style === 1 || item?.style === 2) {
          if (item?.title) {
            if (item?.title === "创作中心" || item?.title === "推荐服务") {
              continue; // 创作中心 推荐服务
            } else if (item?.title === "更多服务") {
              if (item?.title) {
                delete item.title;
              }
              if (item?.items?.length > 0) {
                let newItems = [];
                for (let i of item.items) {
                  if (/user_center\/feedback/g.test(i?.uri)) {
                    newItems.push(i); // 联系客服
                  } else if (/user_center\/setting/g.test(i?.uri)) {
                    newItems.push(i); // 设置
                  } else {
                    continue;
                  }
                }
                item.items = newItems;
              }
            }
          }
        } else {
          continue; // 其他style
        }
      }
      newSects.push(item);
    }
    obj.data.sections_v2 = newSects;
  }
  // 非会员开启本地会员标识
  if (obj?.data?.vip) {
    if (obj?.data?.vip?.status === 0) {
      obj.data.vip_type = 2;
      obj.data.vip.type = 2;
      obj.data.vip.status = 1;
      obj.data.vip.due_date = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
      obj.data.vip.label = {
        path: "",
        text: "年度大会员",
        label_theme: "annual_vip",
        text_color: "#FFFFFF",
        bg_style: 1,
        bg_color: "#FB7299",
        border_color: "",
        image: "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png"
      };
      obj.data.vip.nickname_color = "#FB7299";
      obj.data.vip.role = 3;
    }
  }
} 
$done({ body: JSON.stringify(obj) });
