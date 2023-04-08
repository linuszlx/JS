let body = JSON.parse($response.body);
if(body['data']['2019061000']['data']['nodes'][3]['typeName'].hasOwnProperty("FEED_DRAWER_PAGINATION")){body['data']['2019061000']['data']['nodes']['3']['nodes']['0'] = { }};
if(body['data']['2019061000']['data']['nodes'][4]['typeName'].hasOwnProperty("FEED_DRAWER_PAGINATION")){body['data']['2019061000']['data']['nodes']['4']['nodes']['0'] = { }};
$done({body: JSON.stringify(body)});
