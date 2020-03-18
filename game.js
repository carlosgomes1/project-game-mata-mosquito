// Ajustando tamanho da tela jogável
var width, height

function ajustarTamanhoJogo() {
    width = window.innerWidth
    height = window.innerHeight
}

ajustarTamanhoJogo()

var life = 3

function gerarMosquitoRandom() {

    // Remover mosquito anterior
    if( document.getElementById('mosquito') ) {
        document.getElementById('mosquito').remove()
        document.getElementById('vida' + life).src = 'imagens/coracao_vazio.png'
        life--

        if( life === 0 ) {
            window.location.href = 'game-over.html'
        }
    }

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
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.top = posY + 'px'
    mosquito.style.left = posX + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

// Tamanhos aleatórios do mosquito

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

// Girando o rosto do mosquito

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

// Criando mosquito a cada 1 segundo

function criarElemento() {
    setInterval(gerarMosquitoRandom, 1000)
}

criarElemento()

// Cronometro

var cronometroN = 60

function cronometro() {
    setInterval( function() {
        document.getElementById('cronometro').innerHTML = cronometroN
        cronometroN--

        if( cronometroN === 0 ) {
            window.location.href = 'victory.html'
        }
    }, 1000)
}

cronometro()
