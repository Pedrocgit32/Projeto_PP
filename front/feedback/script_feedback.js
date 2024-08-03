let button = document.getElementById("feito");

async function handleSubmit(event) {
    event.preventDefault();

    let fm = new FormData();

    // fm.append('file', document.getElementById('file').files[0]); // Corrigido para usar .files
    fm.append('comment', document.getElementById('feed').value);

    try {
        const response = await fetch("http://localhost:3005/api/store/feed", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: fm
        });

        const result = await response.json(); // Adicionado await

        if (result.success) {
            alert(result.message);
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocorreu um erro ao enviar o formulário.");
    }
}

button.addEventListener("click", handleSubmit);
