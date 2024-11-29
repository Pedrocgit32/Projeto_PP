
// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



map.on('click', async function (e)  {

    setTimeout(() => {
        window.location.href = 'feedback/add_feedback.html'; // Substitua pelo URL desejado
    }, 1000); // Tempo de espera opcional (1 segundo)

    localStorage.setItem('latlong', e.latlng)
    const { lat, lng } = e.latlng;
    const newMarker = L.marker([lat, lng]).addTo(map);
    let userMarkers = []
    userMarkers.push(newMarker)

    
    try {
        // URLs para APIs e imagens
        const postsUrl = 'http://localhost:3005/api/posts';
        const imagesBasePath = 'http://localhost:3005/uploads/';

        // Requisição para obter marcadores
        const markersResponse = await fetch(markersUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const markersResult = await markersResponse.json();

        if (!markersResult.success) {
            alert('Ops, não foi possível carregar os marcadores!');
            return;
        }

        const markersData = markersResult.data;

        // Requisição para obter feeds
        const postsResponse = await fetch(postsUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const postsResult = await postsResponse.json();

        if (!postsResult.success) {
            alert('Ops, não foi possível carregar os posts!');
            return;
        }

        const feedsData = postsResult.data;

        // Adiciona marcadores no mapa e associa popups
        markersData.forEach((marker, index) => {
            const newMarker = L.marker([marker.latitude, marker.longitude]).addTo(map);
            userMarkers.push(newMarker);

            // Verifica se há um feed correspondente ao marcador
            if (feedsData[index]) {
                const popupContent = `
                    <b>${feedsData[index].comment}</b><br>
                    <img src="${imagesBasePath + feedsData[index].file}" alt="Imagem do local" style="width:100px;height:auto;">
                `;
                newMarker.bindPopup(popupContent);
            }
        });

        // Após adicionar os marcadores, redireciona para outra página
       
    } catch (error) {
        console.error('Erro ao obter os dados:', error);
    }
})

   
    

//     try {
//         // URLs para APIs e imagens
//         const markersUrl = 'http://localhost:3005/api/marker';
//         const postsUrl = 'http://localhost:3005/api/posts';
//         const imagesBasePath = 'http://localhost:3005/uploads/';

//         // Requisição para obter marcadores
//         const markersResponse = await fetch(markersUrl, {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const markersResult = await markersResponse.json();

//         if (!markersResult.success) {
//             alert('Ops, não foi possível carregar os marcadores!');
//             return;
//         }

//         const markersData = markersResult.data;

//         // Requisição para obter feeds
//         const postsResponse = await fetch(postsUrl, {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const postsResult = await postsResponse.json();

//         if (!postsResult.success) {
//             alert('Ops, não foi possível carregar os posts!');
//             return;
//         }

//         const feedsData = postsResult.data;

//         // Adiciona marcadores no mapa e associa popups
//         markersData.forEach((marker, index) => {
//             const newMarker = L.marker([marker.latitude, marker.longitude]).addTo(map);
//             userMarkers.push(newMarker);

//             // Verifica se há um feed correspondente ao marcador
//             if (feedsData[index]) {
//                 const popupContent = `
//                     <b>${feedsData[index].comment}</b><br>
//                     <img src="${imagesBasePath + feedsData[index].file}" alt="Imagem do local" style="width:100px;height:auto;">
//                 `;
//                 newMarker.bindPopup(popupContent);
//             }
//         });

//         // Após adicionar os marcadores, redireciona para outra página
//         setTimeout(() => {
//             window.location.href = 'feedback/add_feedback.html'; // Substitua pelo URL desejado
//         }, 1000); // Tempo de espera opcional (1 segundo)
//     } catch (error) {
//         console.error('Erro ao obter os dados:', error);
//     }

// // })
