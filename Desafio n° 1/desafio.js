let aconcahua = prompt ("En tu ascenso a la montaña encuentras unas bifurcación, ¿tomas el camino de la Izquierda o de la derecha?");
let izquierda = "has caído por un acantilado, fin del Trayeto";
let yerro = "Disculpa no te he entendido";
let derecha;
let subida = 10;

while (!((aconcahua == "Derecha") || (aconcahua == "derecha") || (aconcahua == "DERECHA"))) {
    if ((aconcahua != "") && ((aconcahua == "Izquierda") || (aconcahua == "izquierda") || (aconcahua == "IZQUIERDA"))) {
        alert (izquierda);
    } else {
        alert (yerro);
    };
aconcahua = prompt ("En tu ascenso a la montaña encuentras unas bifurcación, ¿tomas el camino de la Izquierda o de la derecha?");
}

while (subida > 0) {
    let pasos = Number(prompt ("Buenisimo! tomas el camino a la cima, ¿cuantos pasos deseas dar? recuerda que solo puedes dar de 1 a 5"));
    subida = subida - pasos;
    if (subida > 0){
        alert("avanzaste " +pasos+ " pasos, te falta poco para la cima");
    }
}
alert("Felicitaciones!!! hiciste cumbre");

