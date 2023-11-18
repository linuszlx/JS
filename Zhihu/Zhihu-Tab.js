let body = JSON.parse($response.body);
  if (body?.selected_sections?.length > 0) {
    // 首页顶部tab
    body.selected_sections = body.selected_sections.filter((i) => !["activity", "live"]?.includes(i?.tab_type));
  };
$done({body: JSON.stringify(body)});
