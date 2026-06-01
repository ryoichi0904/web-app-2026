# API 仕様

## post /api/messages
説明：新しいメッセージを投稿する
リクエストポイント：{"username":"suzuki","text":"こんにちは"}
レスポンス：{"username":"suzuki","text":"こんにちは"}

## GET /api/messages
説明：メッセージ一覧を返す
レスポンス：[{"text":"こんにちは"}]