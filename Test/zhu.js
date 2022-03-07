let body = JSON.parse($response.body);

body["config"]["km_sku_report_error"] = 0;
body["config"]["account_post_log"] = {
      "post_interval" : "360000",
      "maxLogCount" : 0,
      "sampling" : 50
    };
body["config"]["mqtt_post_log"] = {
      "post_interval" : "360000",
      "maxLogCount" : 0,
      "sampling" : 50
    };
$done({body: JSON.stringify(body)});
