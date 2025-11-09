const saudacao = require('./app');
const assert = require('assert');

try {
  assert.strictEqual(saudacao(), "Olá, DevOps! O pipeline está funcionando corretamente.");
  console.log("✅ Teste passou com sucesso!");
  process.exit(0);
} catch (error) {
  console.error("❌ Teste falhou:", error.message);
  process.exit(1);
}
