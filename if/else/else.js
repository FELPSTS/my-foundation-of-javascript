var idade = prompt("digite sua novamente idade");

if (idade >= 18) {
    document.write("você é obrigado a votar com");
} 
else if (idade = 16){
    document.write("você pode votar");
}
 else {
    document.write("você não pode votar");
}

document.write(` com ${idade}`)
