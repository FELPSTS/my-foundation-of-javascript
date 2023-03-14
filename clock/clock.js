showTimeNow = () => { 
    var clock = document.getElementById('clock');
  
    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
  
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
  
    clock.value = hora + ':' + minutos + ':' + segundos;
  
    var mensagem = document.getElementById('formality');
    var body = document.getElementById('body');
    
    if (hora > 19) {
        mensagem.innerText          = 'BOA NOITE!'
        mensagem.style.color        = 'white'
        body.style.backgroundColor  = '#3c4464'
    }
    else if (hora < 3){
        mensagem.innerText          = 'BOA MADRUGADA!'
        mensagem.style.color        = 'white'
        body.style.backgroundColor  = '#040414'
    }
    else if (hora < 4){
        mensagem.innerText          = '6¡∀ᗡ∀⅁∩ᴚᗡ∀W ∀Oᙠ6'
        mensagem.style.color        = 'white'
        body.style.backgroundColor  = 'red'
    }
    else if(hora < 5){
        mensagem.innerText          = 'VAI DORMIR!'
        mensagem.style.color        = 'white'
        body.style.backgroundColor  = '#040404'
    }
    else if(hora < 7){
        mensagem.innerText          = 'BOA MADRUGADA!'
        mensagem.style.color        = 'white'
        body.style.backgroundColor  = '#3c4464'
    }
    else if(hora < 10){
        mensagem.innerText          = 'BOA MANHÃ!'
        body.style.backgroundColor  = '#FDC03C'
    }
    else if(hora < 16){
        mensagem.innerText          = 'BOA DIA!'
    }
    else{
        mensagem.innerText          = 'BOA TARDE!'
        body.style.backgroundColor  = '#fc843c'
    }

}
  
setInterval(showTimeNow, 1000);