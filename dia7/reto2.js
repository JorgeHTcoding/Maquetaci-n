


class Prenda {

    constructor(nombre, precio) {

        this.nombre = nombre;
        this.precio = precio;
    }
}
let arrayCarrito = [];
let prenda1 = new Prenda("Vaque-patos", 85);
let prenda2 = new Prenda("Abrazabrigo", 150);
let prenda3 = new Prenda("Vestido San Guijuelo", 250);
let prenda4 = new Prenda("Chirimoyasquero", 400);

// let counter = document.getElementById("precioCarrito");
let counter = $("precioCarrito")[0];

$(function () {
    $("#boton1").click(function () {
        arrayCarrito.push(prenda1);
        console.log(arrayCarrito);
    });
    $("#boton2").click(function () {
        arrayCarrito.push(prenda2)
        console.log(arrayCarrito);
    });
    $("#boton3").click(function () {
        arrayCarrito.push(prenda3)
        console.log(arrayCarrito);
    });
    $("#boton4").click(function () {
        arrayCarrito.push(prenda4)
        console.log(arrayCarrito);
    });
});
// function boton1() {
//     arrayCarrito.push(prenda1);
//     console.log(arrayCarrito);  
//     }
// function boton2() {
//     arrayCarrito.push(prenda2);
//     console.log(arrayCarrito);
// }
// function boton3() {
//     arrayCarrito.push(prenda3);
//     console.log(arrayCarrito);
// }
// function boton4() {
//     arrayCarrito.push(prenda4);
//     console.log(arrayCarrito);
// }

$(function () {
    $("#imprimirPrenda").click(function () {
        let contadorPrecio = 0;
        for (let i = 0; i < arrayCarrito.length; i++) {
            contadorPrecio += arrayCarrito[i].precio                     
        }          
         $("#precioCarrito").html(contadorPrecio);
       
    });
});

// function imprimirPrenda(){
//     let contadorPrecio = 0;
//     for(let i = 0; i< arrayCarrito.length; i++){
//       contadorPrecio += arrayCarrito[i].precio
//     }
//     counter.innerHTML += `<p>
//          ${contadorPrecio}
//     </p>`
// }


