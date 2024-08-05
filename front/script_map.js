// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.768, -51.146], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([-29.749570, -51.153770]).addTo(map);
// Coordenadas dos pontos de localização próximos ao rio
// var pontosDeLocalizacao = [
//     // [-29.752480, -51.178569],
//     // [-29.751330, -51.166170],
//     // [-29.749570, -51.153770]
//     // [-29.748080, -51.142540],
//     // [-29.746050, -51.130140]
// ];

// Adiciona marcadores vermelhos no mapa
// marker.forEach(function(coord) {
//     L.marker(coord, {icon: L.icon({iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', iconSize: [25, 40], iconAnchor: [12, -59], popupAnchor: [1, -34], shadowSize: [41, 41], iconColor: 'red'})}).addTo(map);
// });

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
