    var num = document.getElementById('number');
    var resultado = document.getElementById('resultado');

        function result(){ 
            var numint = parseInt(num.value);

            for (var numero = 0; numero <= numint; numero++) {   
                resultado.innerText += `\n o resultado é ${numero}\n`;
            }
            
}