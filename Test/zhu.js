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
body["config"]["sentry_logReport"] = false;
body["config"]["log_config"] = {
      "monitors" : {
        "initiative" : {
          "enable" : false,
          "probability" : 1
        },
        "hybrid" : {
          "enable" : false,
          "probability" : 1
        },
        "block" : {
          "probability" : 1,
          "enable" : false,
          "calm_down_time" : 10,
          "check_period_time" : 2,
          "timeout" : 3
        },
        "initiativeFullLog" : {
          "enable" : false,
          "probability" : 1
        },
        "crash" : {
          "enable" : false,
          "probability" : 1
        },
        "metrics" : {
          "time_interval" : 30,
          "cpu" : {
            "enable" : false,
            "probability" : 1,
            "threshold" : 6000
          },
          "memory" : {
            "enable" : false,
            "probability" : 1,
            "threshold" : 10737418240
          }
        },
        "remoteInstructionFullLog" : {
          "enable" : false,
          "probability" : 1
        }
      },
      "description" : "针对日志回捞服务的AppCloud配置"
    };

$done({body: JSON.stringify(body)});
