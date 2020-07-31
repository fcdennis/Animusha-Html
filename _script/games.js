function mudaVideo() {
    var game = document.getElementsByName('radvideo')
    var video = document.createElement('iframe')
    video.setAttribute('id', 'video')
    video.setAttribute('width', '560')
    video.setAttribute('height', '315')
    video.setAttribute('frameborder', '0')
    video.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
    video.setAttribute('allowfullscreen')

    if (game[0].checked) {
        game.setAttribute('src', 'https://youtu.be/ixl31324UxE')
    }
    else if (game[1].checked) {
        game.setAttribute('src', 'https://youtu.be/HZtc5-syeAk')
    }
    else if (game[2].checked) {
        game.setAttribute('src', 'https://youtu.be/BN21FhykXyQ')
    }
    else {
        game.setAttribute('src', "https://youtu.be/rWqDWfVa6rA")
    }
}