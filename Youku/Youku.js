let body = JSON.parse($response.body);
let item3 = body['data']['2019061000']['data']['nodes'][3]['typeName']
let item4 = body['data']['2019061000']['data']['nodes'][4]['typeName']
if(item3.hasOwnProperty('FEED_DRAWER_PAGINATION')){body['data']['2019061000']['data']['nodes']['3']['nodes']['0'] = { }};
if(item4.hasOwnProperty('FEED_DRAWER_PAGINATION')){body['data']['2019061000']['data']['nodes']['4']['nodes']['0'] = { }};
$done({body: JSON.stringify(body)});
