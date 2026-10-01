/*
 * Bilibili 国际版 Live Feed 增强脚本 (基于真实参数精准识别翻页)
 */

const url = $request.url;
let body = $response.body;

// 1. 精准判断是否为“首屏/下拉刷新”：
// 翻页请求特征：含有 page=2/3/4... 且 is_refresh=0
const isPaging = /page=[2-9]/.test(url) || url.includes("is_refresh=0");

if (!body || isPaging) {
    // 命中翻页：直接原样放行，绝不在中间插入 Banner 或胶囊栏
    $done({ body });
} else {
    // 命中首屏（下拉刷新）：拉取 Banner 并排版顶部吸顶胶囊
    const bannerApi = "https://api.live.bilibili.com/xlive/web-interface/v1/index/getBanner?platform=web";

    $httpClient.get({ url: bannerApi, timeout: 2.0 }, function(error, response, data) {
        try {
            let obj = JSON.parse(body);
            let list = obj?.data?.card_list;

            if (Array.isArray(list)) {
                // 清理旧组件
                let oldIdx = list.findIndex(i => i.card_type === "area_entrance_v1");
                if (oldIdx !== -1) {
                    list.splice(oldIdx, 1);
                }

                // 纯文字胶囊栏 (area_entrance_v3)
                let areaEntranceV3 = {
                    "card_type": "area_entrance_v3",
                    "card_data": {
                        "area_entrance_v3": {
                            "module_info": { "id": 58, "link": "", "pic": "", "title": "分区入口", "type": 15, "sort": 3, "count": 0 },
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
                                { "id": 6, "link": "https://live.bilibili.com/app/area?parent_area_id=6&parent_area_name=单机游戏&area_id=0&area_name=&source_event=1", "pic": "", "title": "单机游戏", "area_v2_id": 0, "area_v2_parent_id": 6, "tag_type": 1, "cover_source": 0 }
                            ],
                            "entrance_type": 0
                        }
                    }
                };

                // Banner 提取
                let bannerCard = null;
                if (!error && response.status === 200 && data) {
                    try {
                        let bannerRes = JSON.parse(data);
                        let rawList = bannerRes?.data;
                        if (Array.isArray(rawList) && rawList.length > 0) {
                            bannerCard = {
                                "card_type": "banner_v2",
                                "card_data": {
                                    "banner_v2": {
                                        "module_info": { "id": 1, "link": "", "pic": "", "title": "banner位", "type": 1, "sort": 0, "count": 0 },
                                        "list": rawList.map((item, idx) => ({
                                            "id": item.id || (idx + 1),
                                            "index": idx + 1,
                                            "type": 2,
                                            "static": {
                                                "title": item.title || "",
                                                "link": item.link || "",
                                                "pic": item.pic || "",
                                                "is_ad": false
                                            }
                                        }))
                                    }
                                }
                            };
                        }
                    } catch (e) {}
                }

                // 提取首屏原有的关注栏
                let idolIdx = list.findIndex(i => i.card_type === "my_idol_v1");
                let idolCard = idolIdx !== -1 ? list.splice(idolIdx, 1)[0] : null;

                // 清除首屏可能存在的残留项
                list = list.filter(i => i.card_type !== "banner_v2" && i.card_type !== "area_entrance_v3");

                // 按顺序依次推到最头部：Banner -> 关注 -> 分区胶囊
                list.unshift(areaEntranceV3);
                if (idolCard) list.unshift(idolCard);
                if (bannerCard) list.unshift(bannerCard);

                obj.data.card_list = list;
                body = JSON.stringify(obj);
            }
        } catch (e) {
            console.log("bilibili_feed error: " + e);
        }

        $done({ body });
    });
}
