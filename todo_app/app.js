const express = require('express');
const app = express(); //express関数をappから呼び出せるようにする
const port = 5010;
const taskRoute = require('./routes/tasks');
const connectDB = require('./db/connect');

//ルーティング設定
app.use('/api/v1/tasks', taskRoute);

// データベースと接続
const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://Taiyo:Taiyou811@cluster0.szenfc6.mongodb.net/?retryWrites=true&w=majority&appName=todoapp'
    );
    app.listen(port, console.log('サーバーが起動しました'));
  } catch (error) {
    console.log(error);
  }
};

start();
