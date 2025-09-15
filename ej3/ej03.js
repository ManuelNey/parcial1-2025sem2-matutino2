/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/

let randomNumber = (minimo,maximo) => {
    const random = Math.random()
    const numeroFlotante = (random*(maximo-minimo+1))+minimo;
    return Math.floor(numeroFlotante);
}


function showRandomDigit() {
    const numeroAleatorio = randomNumber(0, 9);
    console.log(numeroAleatorio);
    const displayLed = document.getElementById('displayLED');
    console.log(displayLed);
    const segmentoA = document.getElementById("seg-a");
    const segmentoB = document.getElementById("seg-b");
    const segmentoC = document.getElementById("seg-c");
    const segmentoD = document.getElementById("seg-d");
    const segmentoE = document.getElementById("seg-e");
    const segmentoF = document.getElementById("seg-f");
    const segmentoG = document.getElementById("seg-g");
    if (numeroAleatorio === 0) {
        segmentoA.style.visibility = "visible";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility = "visible";
        segmentoE.style.visibility = "visible";
        segmentoF.style.visibility = "visible";
        segmentoG.style.visibility = "hidden";
    }
    else if (numeroAleatorio === 1) {
        segmentoA.style.visibility = "hidden";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility = "hidden";
        segmentoE.style.visibility = "hidden";
        segmentoF.style.visibility = "hidden";
        segmentoG.style.visibility = "hidden";
    }
    //Faltan implementar Los otros numeros
    else if (numeroAleatorio === 2) {
        segmentoA.style.visibility = "visible";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "hidden";
        segmentoD.style.visibility = "visible";
        segmentoE.style.visibility = "visible";
        segmentoF.style.visibility = "hidden";
        segmentoG.style.visibility = "visible";
    }
    else if (numeroAleatorio === 3) {
        segmentoA.style.visibility = "visible";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility = "visible";
        segmentoE.style.visibility = "hidden";
        segmentoF.style.visibility = "hidden";
        segmentoG.style.visibility = "visible";
    }
    else if (numeroAleatorio === 4) {
        segmentoA.style.visibility = "hidden";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility =  "hidden";
        segmentoE.style.visibility =  "hidden";
        segmentoF.style.visibility = "visible";
        segmentoG.style.visibility =  "visible";
    }
    else if (numeroAleatorio === 5) {
        segmentoA.style.visibility = "visible";
        segmentoB.style.visibility = "hidden";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility =  "visible";
        segmentoE.style.visibility =  "hidden";
        segmentoF.style.visibility = "visible";
        segmentoG.style.visibility =  "visible";}

    else if (numeroAleatorio === 6) {
            segmentoA.style.visibility = "visible";
            segmentoB.style.visibility = "hidden";
            segmentoC.style.visibility = "visible";
            segmentoD.style.visibility = "visible";
            segmentoE.style.visibility = "visible";
            segmentoF.style.visibility = "visible";
            segmentoG.style.visibility = "visible";
        }
    else if (numeroAleatorio === 7) {
        segmentoA.style.visibility = "visible";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility =  "hidden";
        segmentoE.style.visibility =  "hidden";
        segmentoF.style.visibility = "hidden";
        segmentoG.style.visibility =  "hidden";
    }
    else if (numeroAleatorio === 8) {
        segmentoA.style.visibility = "visible";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility = "visible";
        segmentoE.style.visibility = "visible";
        segmentoF.style.visibility = "visible";
        segmentoG.style.visibility = "visible";
    }
    else if (numeroAleatorio === 9) {
        segmentoA.style.visibility = "visible";
        segmentoB.style.visibility = "visible";
        segmentoC.style.visibility = "visible";
        segmentoD.style.visibility = "hidden";
        segmentoE.style.visibility = "hidden";
        segmentoF.style.visibility = "visible";
        segmentoG.style.visibility = "visible";
    }
}

/*else if (numeroAleatorio === 4) {
        segmentoA.style.visibility = "hidden";
        segmentoB.style.visibility = "hidden";
        segmentoC.style.visibility = "hidden";
        segmentoD.style.visibility =  "hidden";
        segmentoE.style.visibility =  "hidden";
        segmentoF.style.visibility = "hidden";
        segmentoG.style.visibility =  "hidden";
    }

 */