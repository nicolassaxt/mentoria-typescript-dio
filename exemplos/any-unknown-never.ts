let anyEstaDeVoltar: any;
anyEstaDeVoltar = 3;
anyEstaDeVoltar = 'teste';

let stringTest: string = 'verificar';
stringTest = anyEstaDeVoltar;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'teste';
unknownValor = true;
unknownValor = 'vai sim';

let stringTEste2: string = 'agora vai';


if(typeof unknownValor === 'string'){
    stringTEste2 = unknownValor;
}

function jogaErro(erro: string , codigo: number): never {  // never quer dizer que o script pode ser interrompido ou nunca chegar a um fim
    throw { error: erro, code: codigo} // Nesse caso ele foi interrompido
}

jogaErro('deu erro', 500)