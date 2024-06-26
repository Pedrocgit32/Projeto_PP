async function handleSubmit(event) {
    event.preventDefault();
  
    const email    = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const params = new URLSearchParams({ email, senha }).toString();

    const response = await fetch(`http://localhost:3005/api/get/login?${params}`, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=UTF-8" }      
      // body: JSON.stringify(data)
    });
  
    const result = await response.json();
  
    if (result.success) {
      console.log(result.data)
      window.location.href = "/front/map.html";
      
    } else {
      alert("email ou senha invalidos");
    }

  };

  let botao = document.getElementById("fsc");
  botao.onclick = async function() {
    window.location.href = '/front/Cadastro.html'
  }