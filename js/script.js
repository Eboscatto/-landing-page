function validarFormulario() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value

    if (nome && email !=0) {
        swal("Parabéns!","Dados enviados com sucesso.");                      
    } else {
        swal("Ops, Erro!","Todos os campos devem ser preenchidos.");      
    }       
}

function limparFormulario() {    
    document.getElementById('nome').value="";
    document.getElementById('email').value="";
} 

