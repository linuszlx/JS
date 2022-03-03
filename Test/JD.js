let body = JSON.parse($response.body);

delete body['floors'][2]['data']['logisticsInfo'];

$done({body: JSON.stringify(body)});
