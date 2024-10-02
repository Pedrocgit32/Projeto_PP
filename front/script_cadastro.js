let button = document.getElementById("criar");

button.onclick = async function() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let cpf = document.getElementById("cpf").value;
    let cep = document.getElementById("cep").value;
    let data = {nome,email,senha,cpf,cep}

    

    if(cep[0] == 9 && cep[1] == 3 && cep[2] == 0 ){
  
        const response = await fetch('http://localhost:3005/api/store/cadastro', {
            method: "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(data)
        });

        let content = await response.json();

        if(content.success) {
        // alert("Sucesso")
            window.location.pathname = "/front/index_login.html"
        } else {
            alert('Não deu');
        }

    }else{
        alert("CEP inválido.")
        window.location.pathname = "/front/Cadastro.html"
    }
    
}

