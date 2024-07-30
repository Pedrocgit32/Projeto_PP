async function handleSubmit(event) {
    event.preventDefault();

    let fm = new FormData();

    fm.append('file', document.getElementById('file').value[0]);
    fm.append('comment', document.getElementById('feed').value);

    const response = await fetch('http://localhost:3005/api/store/feed', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: fm
    });

    const result = response.json();

    if(result.success) {
        alert(result.message);
    } else {
        alert(result.message);
    }
}

//função de selecionar uma imagem 
function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('image');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}