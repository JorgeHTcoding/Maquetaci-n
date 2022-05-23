

let nombre = document.getElementById("nombre");
let origen = document.getElementById("origen");
let destino = document.getElementById("destino");
let personas = document.getElementById("personas");
let fecha = document.getElementById("fecha");

let arrayInfo = [];
let arrayFiltro = [];

let impListaJson = document.getElementById("impListaJson");

function escribirEnFicheroJSON() {


    let nombreJson = (nombre.value).toLowerCase();
    let origenJson = (origen.value).toLowerCase();
    let destinoJson = (destino.value).toLowerCase();
    let personasJson = (personas.value).toLowerCase();
    let fechaJson = (fecha.value).toLowerCase();

    let datosJson = { nombre: nombreJson, origen: origenJson, destino: destinoJson, personas: personasJson, fecha: fechaJson };

    arrayInfo.push(datosJson);
    console.log(arrayInfo)

}

function filtrado() {

    for (let i = 0; i < arrayInfo.length; i++) {

        if (arrayInfo[i].destino == "canarias" || arrayInfo[i].destino == "mallorca" || arrayInfo[i].destino == "galicia")
            arrayFiltro.push(arrayInfo[i])
    }
    console.log(arrayFiltro);

    for (let i = 0; i < arrayFiltro.length; i++) {
        impListaJson.innerHTML += `<ul>
                                <li>${"Nombre: " + arrayFiltro[i].nombre}</li>
                                <li>${"Origen: " + arrayFiltro[i].origen}</li>
                                <li>${"Destino: " + arrayFiltro[i].destino}</li>
                                <li>${"Personas: " + arrayFiltro[i].personas}</li>
                                <li>${"Fecha: " + arrayFiltro[i].fecha}</li>
                                </ul> `
    }
}