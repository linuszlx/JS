var body = $response.body;
var obj = JSON.parse(body);
if (obj.hasOwnProperty("data") == true){
 if (obj.data.hasOwnProperty("friendChannel") == true{
 obj['data']['friendChannel']= { };
 obj['data']['searchBeginScene']= { };
 obj['data']['hongbaoconfig_3642']= { };
 obj['data']['commonChannel']= { };
 obj['data']['bcjChannel']= { };
};
};
$done({body: JSON.stringify(obj)});
