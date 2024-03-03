const searchGambar = document.getElementById('searchGambar');

function gambar(){
    
    const divtag = document.getElementById('app');
    const apiElem = 'https://api.pexels.com/v1/search?query=cat&per_page=15';
    fetch(apiElem, {
        headers: {
            'Authorization': 'iJ9aguah6tppfkovzqCfrztJRXPDGvYBfbN4kOhefFzFXdbJMK8oi5aZ'
        }
    })
    .then(res => res.json())
    .then(data => data.photos.map(elem => (
        `<img src="${elem.src.large}" 
        style="width: 200px; height: 200px; padding: 4px"/>`
    )))
    .then(result => 
        divtag.innerHTML = result
        )

    
        
}

function cariGambar(){

    const namaGambar = document.getElementById('namaGambar').value.toLowerCase();
    const specificNamaGambar = `https://api.pexels.com/v1/search?query=${namaGambar}&per_page=15`;
    const divtag = document.getElementById('app');

    fetch(specificNamaGambar, {
        headers: {
            'Authorization': 'iJ9aguah6tppfkovzqCfrztJRXPDGvYBfbN4kOhefFzFXdbJMK8oi5aZ'
        }
    })
    .then(ress => ress.json())
    .then(datas => datas.photos.map(elem => (
        `<img src="${elem.src.large}" 
        style="width: 200px; height: 200px; padding: 4px"/>`
    
    )))
    .then(results => {
        divtag.innerHTML = results,
        console.log(results)
        })
}

searchGambar.addEventListener('click', cariGambar);

gambar();

