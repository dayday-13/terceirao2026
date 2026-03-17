const dados = require("./2.cliente.json");
console.log(dados);
console.log(typeof dados);
const clienteEmstring = JSON.stringify(dados);
console.log(clienteEmstring);
console.log(typeof clienteEmstring);
console.log(clienteEmstring.nome);
const objetoCliente = JSON.parse(clienteEmstring);
console.log(objetoCliente);
