
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Recebi uma requisição GET');
});

app.post('/', (req, res) => {
  return res.send('Recebi uma requisicao POST');
});

app.put('/', (req, res) => {
  return res.send('Recebi uma requisicao PUT');
});

app.delete('/', (req, res) => {
  return res.send('Recebi uma requisicao DELETE');
});

app.listen(3000, function (e) {
  console.log('POC API REST DE PEH NA PORTA 30000');
}
);