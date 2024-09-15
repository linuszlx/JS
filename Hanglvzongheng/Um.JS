/********************************
Dianping Remove Ads - Version 1.0
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:

********************************/

const url = $request.url;
const header = $request.headers;
const resp = {};
const headopt = header["rpid:1000002"] || header["rpid:1000019"];

if (headopt != null) {
  $done({ body:"", headers:"", status: "HTTP/1.1 204 No Content" });
} else{
  $done({});
}
