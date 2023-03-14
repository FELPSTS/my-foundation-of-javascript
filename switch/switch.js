var agora = new Date()
var diasemana = agora.getDay()

document.write(`hoje é dia ${diasemana }`);

switch (diasemana){
    case 0:
    document.write(' domingo');
    break
    
    case 1:
    document.write(' segunda');
    break

    case 2:
    document.write(' terça');
    break
    
    case 3:
    document.write(' quarta');
    break
    
    case 4:
    document.write(' quinta');
    break
    
    case 5:
    document.write(' sexta');
    break
    
    case 6:
        document.write(' sábado')
    break
    
    default:
    document.write('Invalido');
    break
}