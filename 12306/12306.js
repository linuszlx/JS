/*
引用地址https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/12306.js
*/
// 2024-02-19 10:45

let body = "";
let obj = JSON.parse($request.body);
if (obj.placementNo === "0007") {
  body =
    '{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}';
} else if (obj.placementNo === "G0054") {
  body = '{"code":"00","materialsList":[]}';
} else {
  body = '{"code":"00","message":"无广告返回"}';
}
  $done({ response: { body } });
