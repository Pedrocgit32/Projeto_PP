const { response } = require("express");

// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Array para armazenar os marcadores adicionados pelo usuário
let userMarkers = [];


//Puxar do banco de dados, GET. Vai fazer um foreach e substituir os campos de lat e long

async function userMarkers() {
    try {
        const response = await fetch('http://localhost:3005/api/marker', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const results = await response.json();

        if (results.success) {
            const markers = results.data;

            markers.forEach(marker => {
                const newMarker = L.marker([marker.latitude, marker.longitude]).addTo(map);
                userMarkers.push(newMarker); // Adiciona o marcador na lista
            });
        } else {
            alert('Ops, não foi possível carregar os marcadores!');
        }
    } catch (error) {
        console.error('Erro ao obter os marcadores:', error);
    }
}

// const newMarker = L.marker([-29.757926, -51.149658]).addTo(map);
// userMarkers.push(newMarker);


// // Evento para capturar cliques no mapa e adicionar marcadores
// map.on('click', function (e) {
//     const { lat, lng } = e.latlng;

//     // Adiciona um marcador na posição clicada
//     const newMarker = L.marker([lat, lng]).addTo(map);
//     userMarkers.push(newMarker);

//     // Associa um popup simples ao novo marcador
//     newMarker.bindPopup('<b>Marcador Adicionado!</b><br>Clique em outro local ou finalize.');

//     // Quando o marcador é clicado, ele pode exibir mais informações posteriormente
//     attachPopup(newMarker, userMarkers.length - 1);
// });

// Função para exibir o popup em marcadores personalizados
async function attachPopup(marker, index) {
    const images = 'http://localhost:3005/uploads/';
    const response = await fetch('http://localhost:3005/api/posts', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });

    const results = await response.json();

    if (results.success) {
        const feeds = results.data;
        if (feeds[index]) {
            const popupContent = `
                <b>${feeds[index].comment}</b><br>
                <img src="${images + feeds[index].file}" alt="Imagem do local" style="width:100px;height:auto;">
            `;
            marker.bindPopup(popupContent).openPopup();
        }
    } else {
        alert('Ops');
    }
}














// // Cria o mapa e define a visualização inicial
// var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

// // Adiciona o tile layer do OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Array com as coordenadas dos marcadores
// const markersData = [
//     { coords: [-29.757926, -51.149658], popupIndex: 0 },
//     { coords: [-29.757164, -51.155728], popupIndex: 1 },
//     { coords: [-29.756281, -51.144337], popupIndex: 2 },
//     { coords: [-29.758440, -51.153014], popupIndex: 3 }
// ];

// // Array para armazenar os marcadores
// const markers = markersData.map(markerData => L.marker(markerData.coords).addTo(map));

// async function getFeed() {
//     const images = 'http://localhost:3005/uploads/';
//     const response = await fetch('http://localhost:3005/api/posts', {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     const results = await response.json();

//     if (results.success) {
//         let feeds = await results.data;

//         // Itera sobre os marcadores e associa os popups
//         markers.forEach((marker, index) => {
//             const popupContent = `
//                 <b>${feeds[index].comment}</b><br>
//                 <img src="${images + feeds[index].file}" alt="Imagem do local" style="width:100px;height:auto;">
//             `;
//             marker.bindPopup(popupContent).openPopup();
//         });
//     } else {
//         alert('Ops');
//     }
// }

// getFeed();