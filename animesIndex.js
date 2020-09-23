const source = ["https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108632-Z8LOaPpYPK93.jpg", "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116006-XasdW0bB4n18.png", "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101239-gkX4JdUvv3JE.jpg", "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png", "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg", "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110349-59hhZ9CNHVdk.png" ]

function setImage(){
    let random = Math.floor(Math.random() *  6);
    let imageGenerator = source[random]
    return imageGenerator
} 