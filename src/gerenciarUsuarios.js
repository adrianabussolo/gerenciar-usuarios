const usuarios = ['matheus', 'marcos', 'lucas', 'joao']; // lista usuarios

 // função que retorna a lista de usuarios
function retornarUsuarios() {
    return usuarios;
}
 // funçaõ adicionar novo usuário, pegar um novo nome
function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

// para testar essas funções é preciso exportar
module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario  
}
