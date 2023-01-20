let body = JSON.parse($response.body);
  body.data.nav_list = body.data.nav_list.filter(function(item) {
    if (item.link_title == "打车" || item.link_title == "代驾" || item.link_title == "滴滴青桔骑行" || item.link_title == "专车" || item.link_title == "更多"){
      return true;
    }
    return false;
  });
  body.data.bottom_nav_list = [
      {
        "icon_active" : "https:\/\/img-hxy021.didistatic.com\/static\/apollofile\/do1_r1NRbbajAxYAGmF8gdxD",
        "id" : "v6x_home",
        "text_active_color" : "#EA5E1E",
        "text" : "滴滴",
        "show_type" : "default",
        "link" : "OneTravel:\/\/v6x_home\/entrance",
        "icon_repeat_time" : 0,
        "icon" : "https:\/\/img-hxy021.didistatic.com\/static\/apollofile\/do1_tqiBMj2YSr6T1Z8iPPUa",
        "icon_top" : "https:\/\/img-hxy021.didistatic.com\/static\/apollofile\/do1_pP1QXmCdLbMMZ5dA3vcg"
      },
      {
        "icon_active" : "https:\/\/img-hxy021.didistatic.com\/static\/apollofile\/do1_q2UwLrTjnIiLPLWjqw9P",
        "id" : "user_center",
        "text_active_color" : "#EA5E1E",
        "text" : "我的",
        "show_type" : "default",
        "link" : "OneTravel:\/\/user_center\/entrance",
        "icon_repeat_time" : 0,
        "icon" : "https:\/\/img-hxy021.didistatic.com\/static\/apollofile\/do1_nJzY3uniNt8xzmESKM9X"
      }
    ]; 
$done({body: JSON.stringify(body)});

