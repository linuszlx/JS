/*
 * Bilibili 国际版 Live Feed 增强脚本 (精炼版)
 * 仅做一件事：将不渲染的 area_entrance_v1 升级为可渲染的 area_entrance_v3
 */

let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        let list = obj?.data?.card_list;

        if (Array.isArray(list)) {
            // 找到服务端下发的旧分区入口卡片
            let oldIndex = list.findIndex(item => item.card_type === "area_entrance_v1");

            if (oldIndex !== -1) {
                let oldData = list[oldIndex].card_data?.area_entrance_v1;

                // 原地升级为 v3 结构，并复用服务端下发的所有分区数据
                list[oldIndex] = {
                    "card_type": "area_entrance_v3",
                    "card_data": {
                        "area_entrance_v3": {
                            "module_info": oldData?.module_info || {
                                "id": 58,
                                "link": "",
                                "pic": "",
                                "title": "分区入口（二合一）",
                                "type": 15,
                                "sort": 3,
                                "count": 0
                            },
                            "extra_info": oldData?.extra_info || { "offline": [] },
                            "list": oldData?.list || [],
                            "entrance_type": 0
                        }
                    }
                };

                // 将其移动到“我的关注”下方（让滑动吸顶更自然）
                let entranceCard = list.splice(oldIndex, 1)[0];
                let idolIdx = list.findIndex(item => item.card_type === "my_idol_v1");
                list.splice(idolIdx !== -1 ? idolIdx + 1 : 0, 0, entranceCard);
            }

            body = JSON.stringify(obj);
        }
    } catch (e) {
        console.log("bilibili_feed script error: " + e);
    }
}
$done({ body });
