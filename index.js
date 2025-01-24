const express = require('express');
const app = express();
const port = 3010;

app.listen(port, () => {
  console.log(`サーバー起動！ http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('これで');
});

const customers = [
  { title: '田中', id: 1 },
  { title: '斎藤', id: 2 },
  { title: '山本', id: 3 },
  { title: '鈴木', id: 4 },
  { title: '林', id: 5 },
];

app.get('/api/customers', (req, res) => {
  res.send(customers);
});

app.post('apt/customers', (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
});
