// Como podemos melhorar o esse código usando TS? 

 
/* ---- Resposta 2 -----*/
enum Profissao{
    atriz,
    padeiro
};

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao;
};

const maria: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.atriz
};


const roberto: Pessoa = {

    nome: "roberto",
    idade:  19,
    profissao: Profissao.padeiro
};

const laura: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz
};

const carlos: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.padeiro
};
