// 2024-01-06 12:10

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if  (url.includes("/x/resource/show/tab/v2")) {
  // 底部选项卡
  if (obj?.data?.bottom?.length > 0) {
    const sortLists = ["首页", "动态", "我的"];
    obj.data.bottom = obj.data.bottom
      .filter((i) => sortLists?.includes(i?.name))
      .sort((a, b) => sortLists.indexOf(a?.name) - sortLists.indexOf(b?.name));
  }
  // 首页导航栏
  if (obj?.data?.tab?.length > 0) {
    const sortLists = ["直播", "推荐", "热门", "影视", "动画"];
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
} else if (url.includes("/x/v2/account/mine?")) {
  // 我的页面
  const del = ["rework_v1", "vip_section", "vip_section_v2"];
  for (let i of del) {
    // 不必要项目
    delete obj.data[i];
  }
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
              // 创作中心 推荐服务
              continue;
            } else if (item?.title === "更多服务") {
              delete item.title;
              if (item?.items?.length > 0) {
                let newItems = [];
                for (let i of item.items) {
                  if (/user_center\/feedback/g.test(i?.uri)) {
                    // 联系客服
                    newItems.push(i);
                  } else if (/user_center\/setting/g.test(i?.uri)) {
                    // 设置
                    newItems.push(i);
                  } else {
                    continue;
                  }
                }
                item.items = newItems;
              }
            }
          }
        } else {
          // 其他style
          continue;
        }
      }
      newSects.push(item);
    }
    obj.data.sections_v2 = newSects;
  }
}

$done({ body: JSON.stringify(obj) });
