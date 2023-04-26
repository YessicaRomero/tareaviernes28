"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var dimension = rls.questionInt("ingrese la dimension: ");
var numeros = new Array(dimension);
var positivos = 0;
var negativos = 0;
var ceros = 0;
function Numeros(arrNew) {
    for (var i = 0; i <= numeros.length - 1; i++) {
        numeros[i] = rls.questionInt("ingrese un numero: ");
        if (numeros[i] > 0) {
            positivos++;
        }
        if (numeros[i] < 0) {
            negativos++;
        }
        if (numeros[i] === 0) {
            ceros++;
        }
    }
    console.log("los numeros positivos son: ", positivos, "los negativos son: ", negativos, "la cantidad de ceros son: ", ceros);
}
Numeros(numeros);
