let body = JSON.parse($response.body);
if(body.hasOwnProperty('materialsList')){body['materialsList'] = { }};
if(body.hasOwnProperty('materialsList')){body['advertParam']['skipTime'] = 1};
$done({body: JSON.stringify(body)});
