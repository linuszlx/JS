/*
 * Bilibili 国际版 Live Feed 增强脚本
 * 功能：彻底移除大 Banner，升级并激活滑动分区栏 (area_entrance_v3)
 */

let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        if (obj && obj.data && Array.isArray(obj.data.card_list)) {
            let list = obj.data.card_list;

            // 1. 彻底清除任何 banner 模块（不注入、不展示大横幅）
            list = list.filter(item => item.card_type !== "banner_v2");

            // 2. 移除国际版原先无法在首屏正常展示的旧版 area_entrance_v1
            let oldIndex = list.findIndex(item => item.card_type === "area_entrance_v1");
            if (oldIndex !== -1) {
                list.splice(oldIndex, 1);
            }

            // 3. 构建可被客户端正确渲染的 area_entrance_v3 滑动标签组件
            let areaEntranceV3 = {
                "card_type": "area_entrance_v3",
                "card_data": {
                    "area_entrance_v3": {
                        "module_info": {
                            "id": 58,
                            "link": "",
                            "pic": "",
                            "title": "分区入口（二合一）",
                            "type": 15,
                            "sort": 3,
                            "count": 0
                        },
                        "extra_info": { "offline": [] },
                        "list": [
                            { "id": 14, "link": "https://live.bilibili.com/app/area?parent_area_id=14&parent_area_name=聊天室&area_id=0&area_name=&source_event=1", "pic": "", "title": "聊天室", "area_v2_id": 0, "area_v2_parent_id": 14, "tag_type": 1, "cover_source": 0 },
                            { "id": 145, "link": "https://live.bilibili.com/app/area?parent_area_id=1&parent_area_name=娱乐&area_id=145&area_name=颜值&source_event=1", "pic": "", "title": "颜值", "area_v2_id": 145, "area_v2_parent_id": 1, "tag_type": 1, "cover_source": 0 },
                            { "id": 9, "link": "https://live.bilibili.com/app/area?parent_area_id=9&parent_area_name=虚拟主播&area_id=0&area_name=&source_event=1", "pic": "", "title": "虚拟主播", "area_v2_id": 0, "area_v2_parent_id": 9, "tag_type": 1, "cover_source": 0 },
                            { "id": 1, "link": "https://live.bilibili.com/app/area?parent_area_id=1&parent_area_name=娱乐&area_id=0&area_name=&source_event=1", "pic": "", "title": "娱乐", "area_v2_id": 0, "area_v2_parent_id": 1, "tag_type": 1, "cover_source": 0 },
                            { "id": 86, "link": "https://live.bilibili.com/app/area?parent_area_id=2&parent_area_name=网游&area_id=86&area_name=英雄联盟&source_event=1", "pic": "", "title": "英雄联盟", "area_v2_id": 86, "area_v2_parent_id": 2, "tag_type": 1, "cover_source": 0 },
                            { "id": 35, "link": "https://live.bilibili.com/app/area?parent_area_id=3&parent_area_name=手游&area_id=35&area_name=王者荣耀&source_event=1", "pic": "", "title": "王者荣耀", "area_v2_id": 35, "area_v2_parent_id": 3, "tag_type": 1, "cover_source": 0 },
                            { "id": 5, "link": "https://live.bilibili.com/app/area?parent_area_id=5&parent_area_name=电台&area_id=0&area_name=&source_event=1", "pic": "", "title": "电台", "area_v2_id": 0, "area_v2_parent_id": 5, "tag_type": 1, "cover_source": 0 },
                            { "id": 89, "link": "https://live.bilibili.com/app/area?parent_area_id=2&parent_area_name=网游&area_id=89&area_name=CS2&source_event=1", "pic": "", "title": "CS2", "area_v2_id": 89, "area_v2_parent_id": 2, "tag_type": 1, "cover_source": 0 },
                            { "id": 15, "link": "https://live.bilibili.com/app/area?parent_area_id=15&parent_area_name=互动玩法&area_id=0&area_name=&source_event=1", "pic": "", "title": "互动玩法", "area_v2_id": 0, "area_v2_parent_id": 15, "tag_type": 1, "cover_source": 0 },
                            { "id": 6, "link": "https://live.bilibili.com/app/area?parent_area_id=6&parent_area_name=单机游戏&area_id=0&area_name=&source_event=1", "pic": "", "title": "单机游戏", "area_v2_id": 0, "area_v2_parent_id": 6, "tag_type": 1, "cover_source": 0 }
                        ],
                        "entrance_type": 0
                    }
                }
            };

            // 4. 将滑动标签栏精准插入在“我的关注”下方
            let idolIdx = list.findIndex(item => item.card_type === "my_idol_v1");
            if (idolIdx !== -1) {
                list.splice(idolIdx + 1, 0, areaEntranceV3);
            } else {
                list.unshift(areaEntranceV3);
            }

            obj.data.card_list = list;
            body = JSON.stringify(obj);
        }
    } catch (e) {
        console.log("bilibili_feed script error: " + e);
    }
}
$done({ body });
