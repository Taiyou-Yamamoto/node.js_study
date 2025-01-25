const express = require('express');
const app = express(); //express関数をappから呼び出せるようにする
const port = 5010;

app.listen(port, console.log('サーバーが起動しました'));
