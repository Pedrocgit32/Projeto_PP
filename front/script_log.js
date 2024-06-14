// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.768, -51.146], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona o GeoJSON ao mapa
fetch('riodosinos.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function (feature) {
                return { color: 'blue' };
            }
        }).addTo(map);
    });
