var body = $response.body
    .replace(/adv/g, /abc/)
$done({ body });
