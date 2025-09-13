/*
Exemplo: de um objeto:
{ 
    primeiraPropriedade: 'Valor',
    segundaPropriedade: 'Valor'
}

*/
      //lista de objetos com propriedades valores:
     const usuarios = [
     { 
       nome: 'Mateus',
       email: 'mateus@gospel.com'
     },
     { 
       nome: 'Marcos',
       email: 'mateus@gospel.com'

     },
      { 
       nome: 'Lucas',
       email: 'lucas@gospel.com'
     },
     {
       nome: 'João',
       email: 'joao@gospel.com'

     },

     ];

 // função que retorna a lista de usuarios
      function retornarUsuarios() {
        return usuarios;
}

 // funçaõ adicionar novo usuário, pegar um novo nome, esse nome vai receber um novo usuario
      function adicionarNovoUsuario(usuario) {
        usuarios.push(usuario); // dentro da lista de usuarios, colque um usuario no final
}

// para testar essas funções é preciso exportar
      module.exports = {
      retornarUsuarios,
      adicionarNovoUsuario  
}

// para usae a minha função:
// capturaPropriedadedeUsuario(0, nome);
// function capturaPropriedadedeUsuario(indiceDoUsuario, propriedade) {
//   return usuarios.at.(indiceDoUsuario)[propriedade];
// }
// se souber qual propriedade que quero:
//   function capturaPropriedadeNomeDoUsuario(indiceDoUsuario, propriedade) {
//   return usuarios.at.(indiceDoUsuario).nome;
// }

/*
const usuarios = ['matheus', 'marcos', 'lucas', 'joao']; // lista usuarios

*/