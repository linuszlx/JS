let body = JSON.parse($response.body);
body['data']['rows']['1'] = [];
$done({body: JSON.stringify(body)});
