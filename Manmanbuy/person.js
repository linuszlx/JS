var body = $response.body
    .replace(/adConfig/g, /abc/)
$done({ body });
