const usuarios=[ //cria variavel que vai armazenar uma lista (array)
    { nome: "Carlos", idade: 32 },
    { nome: "Ana", idade: 28 },
    { nome: "Felipe", idade: 40 }
];

//encontrando um objeto - o find vai buscar resultado - === exatamente igual
 const ana = usuarios.find(usuario => usuario.nome === "Ana");
 console.log

 //filtrando objetos
 const usuariosAcimade30 = usuarios.filter(usuario.idade > 30);
 console.log(usuarioAcimade30);

 //ordenando objetos por idade
 const usuariosOrdenandosPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
 console.log(usuariosOrdenandosPorIdade);  


 //ordenando objetos por idades
 const usuariosOrdenandosPorIdades = usuarios.sort((a, b) => b.idade - a.idade);
 console.log(usuariosOrdenandosPorIdade);  

