/**************************
哔哩哔哩, 港澳台番剧自动切换地区 & 显示豆瓣评分
如需禁用豆瓣评分或策略通知, 可前往BoxJs设置.
BoxJs订阅地址: https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json
Author: @NobyDa
****************************
脚本取自@NobyDa的库，仅为了方便小白配置默认使用而更改了策略组名称
作者库：https://raw.githubusercontent.com/NobyDa
***************************/

let $ = nobyda();
let run = EnvInfo();

async function SwitchRegion(play) {
	const Group = $.read('BiliArea_Policy') || '港台番剧'; //Your blibli policy group name.
	const CN = $.read('BiliArea_CN') || 'DIRECT'; //Your China sub-policy name.
	const TW = $.read('BiliArea_TW') || '台湾节点'; //Your Taiwan sub-policy name.
	const HK = $.read('BiliArea_HK') || '香港节点'; //Your HongKong sub-policy name.
	const current = await $.getPolicy(Group);
	const area = (() => {
		if (/\u50c5[\u4e00-\u9fa5]+\u6e2f|%20%E6%B8%AF&/.test(play)) {
			if (current != HK) return HK;
		} else if (/\u50c5[\u4e00-\u9fa5]+\u53f0|%20%E5%8F%B0&/.test(play)) {
			if (current != TW) return TW;
		} else if (current != CN) return CN;
	})()

	if (area) {
		const change = await $.setPolicy(Group, area);
		const notify = $.read('BiliAreaNotify') === 'false';
		const msg = SwitchStatus(change, current, area);
		if (!notify) {
			$.notify(/^http/.test(play) || !play ? `` : play, ``, msg);
		} else {
			console.log(`${/^http/.test(play)||!play?``:play}\n${msg}`);
		}
		if (change) {
			return true;
		}
	}
	return false;
}

function SwitchStatus(status, original, newPolicy) {
	if (status) {
		return `${original}  =>  ${newPolicy}  =>  🟢`;
	} else if (original === 2) {
		return `切换失败, 策略组名未填写或填写有误 ⚠️`
	} else if (original === 3) {
		return `切换失败, 不支持您的VPN应用版本 ⚠️`
	} else if (status === 0) {
		return `切换失败, 子策略名未填写或填写有误 ⚠️`
	} else {
		return `策略切换失败, 未知错误 ⚠️`
	}
}

function EnvInfo() {
	if (typeof($response) !== 'undefined') {
		const raw = JSON.parse($response.body);
		const data = raw.data || raw.result || {};
		//if surge or loon, $done() will auto reconnect with the new policy
		SwitchRegion(data.title)
			.then(s => s && !$.isQuanX ? $done() : QueryRating(raw, data));
	} else {
		const raw = $request.url;
		const res = {
			url: raw.replace(/%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)&/g, '&')
		};
		SwitchRegion(raw).then(() => $done(res));
	}
}

function nobyda() {
	const isHTTP = typeof $httpClient != "undefined";
	const isLoon = typeof $loon != "undefined";
	const isQuanX = typeof $task != "undefined";
	const isSurge = typeof $network != "undefined" && typeof $script != "undefined";
	const notify = (title, subtitle, message) => {
		console.log(`${title}\n${subtitle}\n${message}`);
		if (isQuanX) $notify(title, subtitle, message);
		if (isHTTP) $notification.post(title, subtitle, message);
	}
	const read = (key) => {
		if (isQuanX) return $prefs.valueForKey(key);
		if (isHTTP) return $persistentStore.read(key);
	}
	const adapterStatus = (response) => {
		if (!response) return null;
		if (response.status) {
			response["statusCode"] = response.status;
		} else if (response.statusCode) {
			response["status"] = response.statusCode;
		}
		return response;
	}
	const getPolicy = (groupName) => {
		if (isSurge) {
			if (typeof($httpAPI) === 'undefined') return 3;
			return new Promise((resolve) => {
				$httpAPI("GET", "v1/policy_groups/select", {
					group_name: encodeURIComponent(groupName)
				}, (b) => resolve(b.policy || 2))
			})
		}
		if (isLoon) {
			if (typeof($config.getPolicy) === 'undefined') return 3;
			const getName = $config.getPolicy(groupName);
			return getName || 2;
		}
		if (isQuanX) {
			if (typeof($configuration) === 'undefined') return 3;
			return new Promise((resolve) => {
				$configuration.sendMessage({
					action: "get_policy_state"
				}).then(b => {
					if (b.ret && b.ret[groupName]) {
						resolve(b.ret[groupName][1]);
					} else resolve(2);
				}, () => resolve());
			})
		}
	}
	const setPolicy = (group, policy) => {
		if (isSurge && typeof($httpAPI) !== 'undefined') {
			return new Promise((resolve) => {
				$httpAPI("POST", "v1/policy_groups/select", {
					group_name: group,
					policy: policy
				}, (b) => resolve(!b.error || 0))
			})
		}
		if (isLoon && typeof($config.getPolicy) !== 'undefined') {
			const set = $config.setSelectPolicy(group, policy);
			return set || 0;
		}
		if (isQuanX && typeof($configuration) !== 'undefined') {
			return new Promise((resolve) => {
				$configuration.sendMessage({
					action: "set_policy_state",
					content: {
						[group]: policy
					}
				}).then((b) => resolve(!b.error || 0), () => resolve());
			})
		}
	}
	const get = (options, callback) => {
		if (isQuanX) {
			options["method"] = "GET";
			$task.fetch(options).then(response => {
				callback(null, adapterStatus(response), response.body)
			}, reason => callback(reason.error, null, null))
		}
		if (isHTTP) {
			if (isSurge) options.headers['X-Surge-Skip-Scripting'] = false;
			$httpClient.get(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
	}
	return {
		getPolicy,
		setPolicy,
		isSurge,
		isQuanX,
		isLoon,
		notify,
		read,
		get
	}
}
