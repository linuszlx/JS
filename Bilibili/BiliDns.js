var body = $response.body;
var obj = JSON.parse(body);
obj['dns']['0']['ips'] = [ ];
obj['dns']['0']['client_ip'] = "";
$done({body: JSON.stringify(obj)});
