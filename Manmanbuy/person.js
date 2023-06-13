var body = $response.body;
var obj = JSON.parse(body);
if (obj.hasOwnProperty("data") == true){
 body['data']['friendChannel']= { };
 body['data']['searchBeginScene']= { };
 body['data']['hongbaoconfig_3642']= { };
 body['data']['commonChannel']= { };
 body['data']['bcjChannel']= { };
};
$done({body: JSON.stringify(obj)});
