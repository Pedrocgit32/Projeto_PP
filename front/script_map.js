// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Array com as coordenadas dos marcadores
const markersData = [
    { coords: [-29.757926, -51.149658], popupIndex: 0 },
    { coords: [-29.757164, -51.155728], popupIndex: 1 },
    { coords: [-29.756281, -51.144337], popupIndex: 2 },
    { coords: [-29.758440, -51.153014], popupIndex: 3 }
];

// Array para armazenar os marcadores
const markers = markersData.map(markerData => L.marker(markerData.coords).addTo(map));

async function getFeed() {
    const images = 'http://localhost:3005/uploads/';
    const response = await fetch('http://localhost:3005/api/posts', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });

    const results = await response.json();

    if (results.success) {
        let feeds = await results.data;

        // Itera sobre os marcadores e associa os popups
        markers.forEach((marker, index) => {
            const popupContent = `
                <b>${feeds[index].comment}</b><br>
                <img src="${images + feeds[index].file}" alt="Imagem do local" style="width:100px;height:auto;">
            `;
            marker.bindPopup(popupContent).openPopup();
        });
    } else {
        alert('Ops');
    }
}

getFeed();