const version = 'V1.0.1';
var ua=$request.headers.rpid||$request.headers.Rpid;ua.includes("1000029")||ua.includes("1000000")?$done({status:"HTTP/1.1 404 Not Found"}):$done({});
