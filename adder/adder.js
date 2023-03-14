var numberone = document.getElementById('valorone')
var numberone = document.getElementById('valortwo')
var resul= document.getElementById('resultado')

function somar(){
var intone= parseInt(valorone.value)
var inttwo= parseInt(valortwo.value)
var res = intone + inttwo

resul.innerText= `o resultado é ${res}`
}
