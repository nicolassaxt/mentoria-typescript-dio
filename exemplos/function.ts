function prinvaValoresNumericos(numero1: number, numero2: number): void{
    console.log(numero1+numero2)
}

function somarValoresNumeirosETratar(number1: number, number2: number, callback: (numero: number)=> number): number{
    let resultado = number1 + number2;
    return callback(resultado)
}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number{
    return numero/ numero
}
console.log(somarValoresNumeirosETratar(1, 4, aoQuadrado))
console.log(somarValoresNumeirosETratar(1, 4, dividirPorEleMesmo))