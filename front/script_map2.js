// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Função para carregar os marcadores do banco de dados
async function loadMarkers() {
    try {
        // URL da API
        const postsUrl = 'http://localhost:3005/api/posts';
        const imagesBasePath = 'http://localhost:3005/uploads/';

        // Requisição para obter os dados
        const response = await fetch(postsUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();

        if (!result.success) {
            alert('Ops, não foi possível carregar os marcadores!');
            return;
        }

        const postsData = result.data;

        // Adiciona marcadores e popups ao mapa
        postsData.forEach((post) => {
            const popupContent = `
                <b>${post.comment}</b><br>
                <img src="${imagesBasePath + post.file}" alt="Imagem do local" style="width:100px;height:auto;">
            `;

            L.marker([post.latitude, post.longitude])
                .addTo(map)
                .bindPopup(popupContent);
        });
    } catch (error) {
        console.error('Erro ao carregar marcadores:', error);
    }
}

// Chama a função para carregar os marcadores quando o mapa for inicializado
loadMarkers();

// Evento de clique no mapa para adicionar novo marcador
map.on('click', function (e) {
    const { lat, lng } = e.latlng;

    // Armazena a localização no localStorage
    localStorage.setItem('latlong', `${lat},${lng}`);

    // Adiciona um marcador temporário no mapa
    const newMarker = L.marker([lat, lng]).addTo(map).bindPopup("Novo marcador adicionado!");
    newMarker.openPopup();

    // Redireciona para outra página após um pequeno atraso
    setTimeout(() => {
        window.location.href = 'feedback/add_feedback.html'; // Substitua pelo URL desejado
    }, 1000);
});


   
    

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
