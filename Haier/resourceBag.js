var body = $response.body;
var obj = JSON.parse(body);
obj.data.resource = [
      {
        "id" : 0,
        "deviceTypeIndex" : "",
        "resUrl" : "https://raw.githubusercontent.com/linuszlx/JS/main/Haier/Tab.json",
        "resType" : "configAPP",
        "resourceType" : "1",
        "resId" : "",
        "typeId" : "",
        "directionalBetaType" : "",
        "hideStatusBar" : "",
        "prodNo" : "",
        "md5" : "D41D8CD98F00B204E9800998ECF8427E",
        "model" : "",
        "name" : "visualTab",
        "resVersion" : "2023.9.22144324"
      }
    ];
$done({body: JSON.stringify(obj)});
