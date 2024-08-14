async function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();

    formData.append('file', document.getElementById('file').files[0]); // Corrigido para usar .files
    formData.append('comment', document.getElementById('feed').value);
    formData.append('id_user', 1);

    console.log(formData.get('file'))
    console.log(formData.get('comment'))
    try {
        const response = await fetch("http://localhost:3005/api/store/feed", {
            method: "POST",
            // headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: formData
        });

        const result = await response.json(); // Adicionado await

        if (result.success) {
            alert(result.message);
            window.location.href = "map.html"
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocorreu um erro ao enviar o formulário.");
    }
}

// button.addEventListener("click", handleSubmit);

async function getPosts() {
    const response = await fetch('http://localhost:3005/api/posts', {
        method: "GET",
        headers: "Content-Type:application/json"
    })

    const results = response.json();

    console.log(results.data);
} 
