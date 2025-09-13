const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios'); // importação da função
const { expect } = require('chai'); // para comparar

//para criar grupo de testes
describe('Testar as funções de Gestão de usuários', function () {
    it('validar que posso adicionar um novo nome de usuários na lista', function () {

        // 1. Adicionar um novo nome na lista de usuários, e chamar uma função
        //    adicionarNovoUsuario('Maria'); ->>> passa o objeto, dai la no adicionar Usuario tem que mudar para passar
        //    o usuario
          adicionarNovoUsuario({
             nome: 'Maria',
             email: 'maria@gospel.com'
          });


        // 2. Retornar a lista de usuários na caixa lista de usuários, recebe a função de retornar usuários
        // Se a função de retornarUsuarios tiver entrada, dai tem que por entrada ali nos parenteses, 
        // caso não, não precisa
        const listaDeUsuarios = retornarUsuarios();

        // 3. Comparar se o novo nome está no fim da lista de usuários
        // A função at --> Permite que eu possa escolher a posição do item dentro 
        // da lista de usuarios 
        // pega o último item dentro desta lista de usuário
        // A função: PONTO significa pegar o nome dele, no caso: .nome
        // se quiser pegar o email: .email
        // Pegue o nome do objeto que está por ultimo que tem o nome Maria:
           expect (listaDeUsuarios.at(-1).nome).to.equal('Maria');
           expect (listaDeUsuarios.at(-1).email).to.equal('maria@gospel.com');
    });
});

    
 