async function handleSubmit(event) {
    event.preventDefault();
  
    const email    = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const data = {email, senha};
  
    const response = await fetch("http://localhost:3005/api/login", {
      method: "POST",
      headers: {"Content-Type":"application/json;charset=UTF-8"},
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
  
    if (result.success) {
      console.log(result.data)
      window.location.href = "/front/Cadastro.html";
    } else {
      alert(result.message);
    }
  };