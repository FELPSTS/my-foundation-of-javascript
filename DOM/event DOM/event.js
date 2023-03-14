function passou(){
    var bloco = window.document.getElementById('container')
    bloco.innerText= 'passou'
}

function saiu(){
    var bloco = window.document.getElementById('container')
    bloco.innerText= 'saiu'
}
bloco.addEventListener('click',clica)

function clica() {
    var bloco = window.document.getElementById('container') 
    bloco.innerText= 'clicou'
}

function clicou() {
    var bloco = window.document.getElementById('containertwo') 
    bloco.style.background='red'
    bloco.style.opacity='100%'
}