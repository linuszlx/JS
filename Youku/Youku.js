let body = JSON.parse($response.body);
if(body['data']['2019061000']['data']['nodes'].hasOwnProperty("3")){body['data']['2019061000']['data']['nodes']['1']['nodes']['0'] = { }};
if(body['data']['2019061000']['data']['nodes'].hasOwnProperty("4")){body['data']['2019061000']['data']['nodes']['1']['nodes']['0'] = { }};
$done({body: JSON.stringify(body)});
