let element = document.getElementById('header')

function modo_escuro () {
    document.getElementById('fundo').style.backgroundColor = 'black'
    document.getElementById('fundo').style.color = 'gray'
    document.getElementById('fundo').style.fontSize = '16px'
    document.getElementById('myImage').src = './fundo.jpg'
    element.innerHTML = 'Testando modo escuro'
}

function modo_daltonico () {
    document.getElementById('fundo').style.backgroundColor = 'violet'
    document.getElementById('fundo').style.color = 'lime'
    document.getElementById('fundo').style.fontSize = '16px'
    document.getElementById('myImage').src = './fundoAcessibilidade.jpg'
    element.innerHTML = 'Testando modo daltônico'
}

function modo_normal () {
    document.getElementById('fundo').style.backgroundColor = '#fff'
    document.getElementById('fundo').style.color = '#450404'
    document.getElementById('fundo').style.fontSize = '16px'
    document.getElementById('myImage').src = './fundo.jpg'
    element.innerHTML = 'Testando modo normal'
}

function modo_baixa_visao () {
    document.getElementById('fundo').style.backgroundColor = '#fff'
    document.getElementById('fundo').style.color = '#000'
    document.getElementById('fundo').style.fontSize = '22px'
    document.getElementById('myImage').src = './fundo.jpg'
    element.innerHTML = 'Testando modo baixa visão'
}