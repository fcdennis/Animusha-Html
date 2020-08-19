function mudaImagemA() {
    let img = window.document.querySelector('img#anime')
    img.src = "_images/_animes/naruto.jpg"
    let legenda = document.querySelector('figcaption#legenda')
    legenda.innerHTML = 'Naruto'
}

function mudaImagemB() {
    let img = window.document.querySelector('img#anime')
    img.src = "_images/_animes/bleach.jpg"
    let legenda = document.querySelector('figcaption#legenda')
    legenda.innerHTML = 'Bleach'
}

function mudaImagemC() {
    let img = window.document.querySelector('img#anime')
    img.src = "_images/_animes/haikyuu.jpg"
    let legenda = document.querySelector('figcaption#legenda')
    legenda.innerHTML = 'Haikyuu'
}