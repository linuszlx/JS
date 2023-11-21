// 2023-11-20 14:46:59

var url = $request.url;
var header = $request.headers;
// const appinfo =
//   "75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98MREjWVGnHiGpDH5Q80ed3A0v%2BbS1ACgVPD9%2Fcpk8JsH1A5FGW9OTWkBTJsvZzW68HAsTKWfL3xCqqc%2Fierlw7aDi17EzsfMqpuZ3tcdE4xkXghFWRE2yY4KLLqdg9BJkKYBwzrh0YlTvH5pyRFnEFUnRe2IHwB7HJK96Byf3x9xU2CPOgRbY92NvJQX%2B3WpH5cIkEHKXREqzreuT%2FJRZjCT9uqZkG%2BeREegUABGvIDZUSnOkabksWuTsBwHWwLuPwiHmIIBnpjJZPVpe52RmlmN4Ch9VTaaiUZ7LTX00MCh%2F0kauQuf7aOocojO%2FsYGnkDBH%2F%2B8e2LJcwGMCuwVgrz%2B12fstCUKawLvXZjYI6BVrtmPmy2nSTV7bkUfVhU6yBhhfzlpZkcidH09qEkTPnoETLbmfpjmF5bEWCbbGmphN0LLM7QfjhR2ORSDp9MciBlNH3WcqWM2";

  var uid = "uid=" + $persistentStore.read("cx_uid");
  var code = "code=" + $persistentStore.read("cx_code");
  var device = "device=" + $persistentStore.read("cx_device");

  if (url.includes("/validateAudioAuth") || url.includes("/groupImageValidate")) {
    header.appinfo = appinfo;
    delete header["User-Agent"];
    delete header["user-agent"];
    delete header["Accept-Language"];
    delete header["accept-language"];
    delete header.Connection;
    delete header.connection;
    delete header.Accept;
    delete header.accept;
    delete header["Accept-Encoding"];
    delete header["accept-encoding"];
    delete header.Cookie;
    delete header.cookie;
    delete header.requestTime;
    delete header.requesttime;
    delete header.authentication;
    $done({ headers: header });
  } else if (url.includes("/validate?")) {
    // 会员数据
    url = url
      .replace(/uid=\d+/g, uid)
      .replace(/code=\w+/g, code)
      .replace(/device=\w+/g, device)
      .replace(/deviceType=\d+/g, "deviceType=1")
      .replace(/&_t=\d+/g, "");
    delete header["User-Agent"];
    delete header["user-agent"];
    delete header["Accept-Language"];
    delete header["accept-language"];
    delete header.Connection;
    delete header.connection;
    delete header.Accept;
    delete header.accept;
    delete header["Accept-Encoding"];
    delete header["accept-encoding"];
    delete header.Referer;
    delete header.referer;
    delete header.Cookie;
    delete header.cookie;
    $done({ url: url, headers: header });
  } else {
    $done({});
  }
