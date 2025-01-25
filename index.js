const express = require('express');
const app = express();
const port = 3010;
app.use(express.json()); //json形式を使う

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

app.post('/api/customers', (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };

  customers.push(customer);
  res.send(customer);
});

// 情報の更新
app.put('/api/customers/:id', (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customers);
});

app.delete('/api/customers/:id', (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;

  const index = customers.indexOf(customer);
  customers.splice(index, 1);
  res.send(customers);
});
