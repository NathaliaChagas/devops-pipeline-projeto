const express = require('express');
const app = express();

function saudacao() {
  return "Olá, DevOps! O pipeline está funcionando corretamente.";
}

app.get('/', (req, res) => {
  res.send(saudacao());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = saudacao;
