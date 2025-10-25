// 脚本引用 https://raw.githubusercontent.com/RuCu6/Loon/main/Scripts/bilibili/json.js
// 2024-11-08 12:30

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/x/v2/feed/index")) {
  // 首页推荐信息流
  if (obj?.data?.config?.toast?.has_toast) {
    obj.data.config.toast.has_toast = false; // 首页刷新通知
  }
  if (obj?.data?.items?.length > 0) {
    // 白名单
    let newItems = [];
    for (let item of obj.data.items) {
      if (item?.goto === "av") {
        // 常规模式
        if (item?.card_goto === "av") {
          newItems.push(item);
        } else {
          continue;
        }
      } else if (item?.goto === "vertical_av") {
        // 竖屏模式
        if (item?.card_goto === "av" || item?.card_goto === "vertical_av") {
          if (item?.creative_entrance) {
            item.creative_entrance = {}; // 推荐话题搜索框
          }
          if (item?.scroll_guide) {
            item.scroll_guide = {}; // 上滑观看提示
          }
          if (item?.story_cart_icon) {
            item.story_cart_icon = {}; // 相关话题图标
          }
          newItems.push(item);
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    obj.data.items = newItems;
  }
}
$done({ body: JSON.stringify(obj) });
