"use strict";
let anyEstaDeVoltar;
anyEstaDeVoltar = 3;
anyEstaDeVoltar = 'teste';
let stringTest = 'verificar';
stringTest = anyEstaDeVoltar;
let unknownValor;
unknownValor = 3;
unknownValor = 'teste';
unknownValor = true;
unknownValor = 'vai sim';
let stringTEste2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTEste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo }; // Nesse caso ele foi interrompido
}
jogaErro('deu erro', 500);
