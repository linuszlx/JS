var body = $response.body;
var obj = JSON.parse(body);
obj['dns']['0']['ips'] = [ ];
$done({body: JSON.stringify(obj)});
