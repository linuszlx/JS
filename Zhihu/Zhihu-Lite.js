let body = null;

switch (true) {
    // 推荐去广告
    case /^https:\/\/api\.zhihu\.com\/topstory\/recommend\?/.test($request.url):
        try {
            let obj = JSON.parse($response.body);
            let data = obj['data'].filter((element) => {
                let flag = !(
                    element['card_type'] === 'slot_event_card' ||
                    element.hasOwnProperty('ad') ||
                    (element['extra']['type'] != 'article' && element['extra']['type'] != 'answer')
                );
                return flag;
            });
            obj['data'] = data;
            body = JSON.stringify(obj);
        } catch (err) {
            console.log(`知乎推荐列表去广告出现异常：${err}`);
        }
        break;
    // 关注列表去广告
    case /^https?:\/\/api\.zhihu\.com\/moments(\/|\?)?(recommend|action=|feed_type=)(?!\/people)/.test($request.url):
        try {
            let obj = JSON.parse($response.body);
            let data = [];
            // 修正由于JS number类型精度问题，导致JSON.parse精度丢失，引起想法不存在的问题
            const targetIdFix = (element) => {
                if (element['target_type'] == 'pin') {
                    target_id = element['target']['url'].match(/https?:\/\/www\.zhihu\.com\/pin\/(\d*)/)[1];
                    element['target']['id'] = target_id;
                    // 转发的想法处理
                    if (!!element['target']['origin_pin'] && element['target']['origin_pin'].hasOwnProperty('url')) {
                        origin_target_id = element['target']['origin_pin']['url'].match(/https?:\/\/www\.zhihu\.com\/pin\/(\d*)/)[1];
                        element['target']['origin_pin']['id'] = origin_target_id;
                    }
                }
                // 动态折叠处理
                else if (element['type'] == 'moments_group') {
                    let momentsGroupList = [];
                    for (let j = 0; j < element['list'].length; j++) {
                        momentsGroupList.push(targetIdFix(element['list'][j]));
                    }
                    element['list'] = momentsGroupList;
                }
                return element;
            }
            for (let i = 0; i < obj['data'].length; i++) {
                let element = targetIdFix(obj['data'][i]);
                if (!element['ad']) 
               // 屏蔽关注页的“最新视频”
            else if (!element["type"]! = "videos"){
                    data.push(element);
                }
            }
            obj['data'] = data;
            body = JSON.stringify(obj);
        } catch (err) {
            console.log(`知乎关注列表去广告出现异常：${err}`);
        }
        break;

    // 回答列表去广告
    case /^https?:\/\/api\.zhihu\.com\/v4\/questions/.test($request.url):
        try {
            let obj = JSON.parse($response.body);
            delete obj['ad_info'];
            delete obj['roundtable_info'];
            body = JSON.stringify(obj);
        } catch (err) {
            console.log(`知乎回答列表去广告出现异常：${err}`);
        }
        break;
}

if (body) {
    $done({ body: body });
} else {
    $done({});
}
