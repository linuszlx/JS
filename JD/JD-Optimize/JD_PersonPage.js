const path1 = "personinfoBusiness";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.floors = body.floors.filter(function(item) {
    if (item.mId == "commonBanner" || item.mId == "myownerfloor_wodezhuanshu" || item.mId == "recommendfloor"|| item.mId == "horizontalCard") {
      return false;
    }
    return true;
  });                                       
}
$done({body: JSON.stringify(body)});
