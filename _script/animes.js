function mudaImagemA() {
    let img = window.document.querySelector('img#anime')
    img.src = "_imagens/naruto.jpg"
    let legenda = document.querySelector('figcaption#legenda')
    legenda.innerHTML = 'Naruto'
}

function mudaImagemB() {
    let img = window.document.querySelector('img#anime')
    img.src = "_imagens/tower_of_god.jpg"
    let legenda = document.querySelector('figcaption#legenda')
    legenda.innerHTML = 'Tower of God'
}

function mudaImagemC() {
    let img = window.document.querySelector('img#anime')
    img.src = "_imagens/haikyuu.jpg"
    let legenda = document.querySelector('figcaption#legenda')
    legenda.innerHTML = 'Haikyuu'
}