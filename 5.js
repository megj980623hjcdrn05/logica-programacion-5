function adivinarnumero(numero) {
    let i =1
    while (!(numero==aleatorio)){
       console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo"); 
       
       fallos.push(numero)
       numero = pedirUnNumero()
       i++
    }
    
    console.log(`Felicidades, adivinaste el número secreto en ${i} intentos ${fallos}`);
}

function pedirUnNumero() {
    let n = prompt("dame un numero del 1 al 100")
while(isNaN(n)) {
    n = prompt(`${n} no es un numero, inténtelo denuevo`);
}
return n
}

const fallos = []
const aleatorio =100
adivinarnumero(pedirUnNumero())