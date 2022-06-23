const pessoa = {
    nome: 'Jose',
    idade: 30,
    profissao: 'desenvolvedor'
}

pessoa.idade= 31;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Joao',
    idade: 25,
    profissao: 'Uber'   
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 39,
    profissao: 'Desenvolvedor'
}

enum Profissao{
    Professora,
    Medica,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}

const julia: Pessoa = {
    nome: 'Julia',
    idade: 32,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 21,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discoreta', 'Programação']
}

const joselia: Estudante = {
    nome: 'Joselia',
    idade: 2,
    materias: ['Matemática discoreta', 'Programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(joselia.materias)