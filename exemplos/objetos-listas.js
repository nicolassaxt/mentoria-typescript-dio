"use strict";
const pessoa = {
    nome: 'Jose',
    idade: 30,
    profissao: 'desenvolvedor'
};
pessoa.idade = 31;
const andre = {
    nome: 'Joao',
    idade: 25,
    profissao: 'Uber'
};
const paula = {
    nome: 'Paula',
    idade: 39,
    profissao: 'Desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Medica"] = 1] = "Medica";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedora
};
const julia = {
    nome: 'Julia',
    idade: 32,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 21,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discoreta', 'Programação']
};
const joselia = {
    nome: 'Joselia',
    idade: 2,
    materias: ['Matemática discoreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(joselia.materias);
