// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([-29.757926, -51.149658]).addTo(map);

// Faz a requisição para a API para recuperar a imagem e o comentário
fetch('http://localhost:3005/api/store/feed')
    .then(response => response.json())
    .then(data => {
        // Supondo que o retorno da API seja algo como { imagemUrl: "url_da_imagem", comentario: "Texto do comentário" }
        const popupContent = `
            <b>${data.comment}</b><br>
            <img src="${data.file}" alt="Imagem do local" style="width:100px;height:auto;">
        `;

        // Adiciona o conteúdo ao popup do marcador
        marker.bindPopup(popupContent).openPopup();
    })
    .catch(error => {
        console.error('Erro ao carregar os dados da API:', error);
        marker.bindPopup("<b>Erro ao carregar os dados!</b>").openPopup();
    });

