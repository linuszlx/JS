var body = $response.body;
var obj = JSON.parse(body);
obj.Variables.hotword=[ ];
obj.Variables.adv={ };
obj.Variables.default_word=[ ];
$done({body: JSON.stringify(obj)});
