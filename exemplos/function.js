"use strict";
function prinvaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumeirosETratar(number1, number2, callback) {
    let resultado = number1 + number2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumeirosETratar(1, 4, aoQuadrado));
console.log(somarValoresNumeirosETratar(1, 4, dividirPorEleMesmo));
