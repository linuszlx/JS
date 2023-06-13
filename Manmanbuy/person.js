var body = $response.body;
var obj = JSON.parse(body);
if(body.hasOwnProperty('data'))
{body['data']['friendChannel']= { };
 body['data']['searchBeginScene']= { };
 body['data']['hongbaoconfig_3642']= { };
 body['data']['commonChannel']= { };
 body['data']['bcjChannel']= { };
};
$done({body: JSON.stringify(obj)});
