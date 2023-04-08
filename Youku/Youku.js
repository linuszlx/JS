let body = JSON.parse($response.body);
body['data']['2019061000']['data']['nodes']['3']['nodes']['0'] = { };
body['data']['2019061000']['data']['nodes']['4']['nodes']['0'] = { };
$done({body: JSON.stringify(body)});
