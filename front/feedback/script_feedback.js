function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const image = document.getElementById('image');
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

async function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();
    const latlong = localStorage.getItem('latlong'); 
    if (!latlong) {
        alert("Localização não encontrada! Verifique se o GPS está ativado.");
        return;
    }

    const matches = latlong.match(/-?\d+(\.\d+)?/g); 
    if (!matches || matches.length < 2) {
        alert("Localização inválida!");
        return;
    }

    const latitudeNum = Number(matches[0].trim());
    const longitudeNum = Number(matches[1].trim());

    if (isNaN(latitudeNum) || isNaN(longitudeNum)) {
        alert("Coordenadas inválidas!");
        return;
    }

    formData.append('file', document.getElementById('file').files[0]);
    formData.append('comment', document.getElementById('feed').value);
    formData.append('id_user', 1);
    formData.append('latitude', latitudeNum);
    formData.append('longitude', longitudeNum);

    console.log("File:", formData.get('file'));
    console.log("Comment:", formData.get('comment'));
    console.log("Latitude:", latitudeNum);
    console.log("Longitude:", longitudeNum);

    try {
        const response = await fetch("http://localhost:3005/api/store/feed", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const result = await response.json();

        if (result.success) {
            console.log(result.message);
            window.location.href = "/front/map.html";
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ocorreu um erro ao enviar o formulário.");
    }
}



async function getPosts() {
    const response = await fetch('http://localhost:3005/api/posts', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    const results = await response.json();

    console.log(results.data);
}







// async function handleSubmit(event) {
//     event.preventDefault();

//     let formData = new FormData();
//     const latlong = localStorage.getItem('latlong'); // Obtém latlong armazenada no localStorage
//     if (!latlong) {
//         alert("Localização não encontrada! Verifique se o GPS está ativado.");
//         return;
//     }

//     const [latitude, longitude] = latlong.split(','); // Divide latitude e longitude
//     formData.append('file', document.getElementById('file').files[0]);
//     formData.append('comment', document.getElementById('feed').value);
//     formData.append('id_user', 1);
//     formData.append('latitude', latitude.trim()); // Adiciona latitude ao formData
//     formData.append('longitude', longitude.trim()); // Adiciona longitude ao formData

//     console.log("File:", formData.get('file'));
//     console.log("Comment:", formData.get('comment'));
//     console.log("Latitude:", formData.get('latitude'));
//     console.log("Longitude:", formData.get('longitude'));

//     try {
//         const response = await fetch("http://localhost:3005/api/store/feed", {
//             method: "POST",
//             body: formData
//         });

//         const result = await response.json();

//         if (result.success) {
//             console.log(result.message);
//             window.location.href = "/front/map.html";
//         } else {
//             alert(result.message);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         alert("Ocorreu um erro ao enviar o formulário.");
//     }
// }

// // button.addEventListener("click", handleSubmit);

