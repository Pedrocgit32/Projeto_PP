// Cria o mapa e define a visualização inicial
var map = L.map('map').setView([-29.75831429389668, -51.15101134694835], 13);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([-29.757926, -51.149658]).addTo(map);
const marker2 = L.marker([-29.757164, -51.155728]).addTo(map);
const marker3 = L.marker([-29.756281, -51.144337]).addTo(map);
const marker4 = L.marker([-29.758440, -51.153014]).addTo(map);

// Faz a requisição para a API para recuperar a imagem e o comentário
async function getFeed() {
    const images = 'http://localhost:3005/uploads/';
    const response = await fetch('http://localhost:3005/api/posts', {
        method: 'GET',
        headers: {
            "Content-Type":"application/json"
        }
    })

    const results = await response.json();
  
    if(results.success) {
        let feeds = await results.data;
        console.log(feeds)

        const popupContent = `
            <b>${feeds[0].comment}</b><br>
            <img src="${images + feeds[0].file}" alt="Imagem do local" style="width:100px;height:auto;">
            
        `;
        
        // const popupContent2 = `
        //     <b>${feeds[1].comment}</b><br>
        //     <img src="${images + feeds[1].file}" alt="Imagem do local" style="width:100px;height:auto;">
        // `;
        
        // const popupContent3 = `
        //     <b>${feeds[2].comment}</b><br>
        //     <img src="${images + feeds[2].file}" alt="Imagem do local" style="width:100px;height:auto;">
        // `;
        // const popupContent4 = `
        //     <b>${feeds[3].comment}</b><br>
        //     <img src="${images + feeds[3].file}" alt="Imagem do local" style="width:100px;height:auto;">
        // `;
        
        


        marker.bindPopup(popupContent).openPopup();
        marker2.bindPopup(popupContent2).openPopup();
        marker3.bindPopup(popupContent3).openPopup();
        marker4.bindPopup(popupContent4).openPopup();
    } else {
        alert('Ops');
    
}}

getFeed();