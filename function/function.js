var number = document.getElementById("number");
var resul  = document.getElementById("res")



function clicou(){
    var numint = parseInt(number.value);
function parimpar(n){
    if (n % 2 == 0){
        resul.innerText= `${numint} é par!`;
    } else {
        resul.innerText= `${numint} é impar`;
    }
}

var numero = numint;
parimpar(numero);
}