// Ajustando tamanho da tela jogável
var width, height

function ajustarTamanhoJogo() {
    width = window.innerWidth
    height = window.innerHeight
}

ajustarTamanhoJogo()

function gerarMosquitoRandom() {

    // Gerando posição aleatória para a mosca
    var random1 = Math.random()
    var random2 = Math.random()

    var posX = Math.floor(random1 * width) - 90
    var posY = Math.floor(random2 * height) - 90

    posX = posX < 0 ? posX = 0 : posX = posX
    posY = posY < 0 ? posY = 0 : posY = posY

    // Criando o elemento HTML com DOM

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.top = posY + 'px'
    mosquito.style.left = posX + 'px'

    document.body.appendChild(mosquito)
}

gerarMosquitoRandom()

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito0'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
    }
}
