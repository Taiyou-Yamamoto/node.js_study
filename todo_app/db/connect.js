const mongoose = require('mongoose');
const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log('データベース接続'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
