var body = $response.body;
var obj = JSON.parse(body);
obj.data = [
    {
      "is_icon_loop" : 0,
      "report" : {
        "index_type" : "",
        "tab_name" : "番剧",
        "tab_id" : "88",
        "page_id" : "105",
        "url" : "bilibili:\/\/pgc\/partition\/tab?sub_page_id=88&page_name=bangumi-operation",
        "index" : "1"
      },
      "before_click_icon" : "",
      "id" : 88,
      "after_click_icon" : "",
      "title" : "番剧",
      "link" : "bilibili:\/\/pgc\/partition\/tab?sub_page_id=88&page_name=bangumi-operation"
    },
    {
      "is_icon_loop" : 0,
      "report" : {
        "index_type" : "",
        "tab_name" : "国创",
        "tab_id" : "89",
        "page_id" : "110",
        "url" : "bilibili:\/\/pgc\/partition\/tab?sub_page_id=89&page_name=gc-operation",
        "index" : "2"
      },
      "before_click_icon" : "",
      "id" : 89,
      "after_click_icon" : "",
      "title" : "国创",
      "link" : "bilibili:\/\/pgc\/partition\/tab?sub_page_id=89&page_name=gc-operation"
    },
    {
      "is_icon_loop" : 0,
      "report" : {
        "index_type" : "",
        "tab_name" : "少儿",
        "tab_id" : "90",
        "page_id" : "155",
        "url" : "bilibili:\/\/pgc\/partition\/tab?sub_page_id=90&page_name=children-operation",
        "index" : "3"
      },
      "before_click_icon" : "",
      "id" : 90,
      "after_click_icon" : "",
      "title" : "少儿",
      "link" : "bilibili:\/\/pgc\/partition\/tab?sub_page_id=90&page_name=children-operation"
    }
  ];
$done({body: JSON.stringify(obj)});
