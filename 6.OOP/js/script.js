// O que é ?
// um paradigma de programação, uma outra forma de programar;
//Utilizando objetos como seu principal principio;

// Metódos : Podem ser add aos objetos
// Eles são como propriedades, porém contem uma funcao
//Invocamos metodos igual invocamos uma funcao

// 1 - METODOS

const car = {
    ano: 2015,
    modelo: "HB20",
    marca: "Hyunday",
    velocidade: function velocidadeMaxima (velAtual , potenciaMotor) {
        return velAtual * potenciaMotor
    }
}

console.log(car); // vai imprimir a funcao completa

console.log(`Modelo do carro é : ${car.modelo} da marca ${car.marca} do ano de ${car.ano} e sua velocidade maxima é ${car.velocidade(120,2)}`); // 

console.log(`Velocidade maxima andando a 80 será de ${car.velocidade(80,2)}`); // Vai imprimir a funcao velocidade maxima.

// Outro Exemplo:

const animal = {
    nome:"Bob" , 
    latir: function () {
        console.log("Au,Au !")
    }
}
console.log(animal.nome);
animal.latir();

// Aprofundado os METÓDOS !

// Os metódos sao utilizados para interagir também com as propriedades do seu objeto;
// Podemos exibir elas e modifica-las tmbem;
//Podemos nos referenciar com o proprio objeto com a palavra reservada THIS


const gato = {
    nome: "Xanin" ,
    tipo: "Gato" , 
    meuNome: function () {
        return `Meu nome é ${this.nome}`
    }
}

console.log(gato.meuNome());


// Outro Exemplo

const pessoa = {
    nome:"Alexandre" ,
    getNome: function () {
        return this.nome
    } ,

    setNome: function (novoNome) {
        this.nome = novoNome ; // Alterei o getNome() 
    }
}
console.log(pessoa.getNome());

pessoa.setNome("Joaquim"); // Acrescentei nome a nova funcao 

console.log(pessoa.getNome()); // Foi alterado com this, o nome de Alexandre para Joaquim na funcao setNome()

// 3 - PROTOTYPE
// É um recurso que faz parte da arquitetura da JavaScript;
// É uma especie de herança, onde objetos pais herdam propriedades e metódos aos filhos
// Por isso muitos metódos são considerados objetos e temos objetos como String, Number, e outros;
// Ou seja cada dado tem um objeto pai herdou caracteristicas pelo prototype;

// PROTOTYPE na pratica
// O recurso fundamental do prototype que temos que entender é o fallback
// Quando uma propriedade não existe em um dado/objeto, ela é procurada no seu ancestral.
// Ou seja, é por isso que temos acesso a length em strings,por exemplo;

const text = "asd"

console.log(Object.getPrototypeOf(text)); // Descobrir os ancestrias da variavel text

const bool = true;

console.log(Object.getPrototypeOf(bool));  // Descobrir os ancestrias da variavel bool

const arra = [];
console.log(Object.getPrototypeOf(arra));  // Descobrir os ancestrias da variavel arr

// 4 - Mains sobre prototype ;

const myObject = {
    a:"b"
}

console.log(Object.getPrototypeOf(myObject)); // Pegar o prototype do objeto;

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const myObject2 = Object.create(myObject); // Criei um object, através de outro ;

console.log(myObject2.a); // Vai imprimir o mesmo que o myObject

console.log(Object.getPrototypeOf(myObject2) === myObject); // Eles são iguais

// 5 - Classes básicas
// Os prototypes são orginados de uma classe;

const cachorro = {
    raca: null , 
    patas: 4
}

const pastorAlemao = Object.create(cachorro);
const viraLata = Object.create(cachorro);
const huskSiberiano = Object.create(cachorro);

pastorAlemao.raca = "Thor"
console.log(pastorAlemao.patas);

viraLata.raca = "Flora";
huskSiberiano.raca = "Gohan";

console.log(viraLata);

// 6 - Funcoes construtoras; 

// Utilizando funcoes como classes, conseguimos iniciar as propriedades com a criação do objeto;
// Chamamos de funcao contrutora, este recurso ;
// O constructor tem como objetivo instanciar um objeto, ou seja, criar um novo objeto;

// Quando a funcao vira uma classe;

function criarCachorro(nome, raca) {
    
    const cachorro2 = Object.create({}) // variavel que criar um objeto vazio;

    cachorro2.nome = nome;
    cachorro2.raca = raca;
    

    return cachorro2;

}

const bob = criarCachorro("bob" , "Vira-lata");

console.log(bob);

const jack = criarCachorro("Amora" , "raposa");
console.log(jack) ;

// 7 - Funcoes com classe ( funcao construtora )

function Cachorro (raca , nome) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("bobito" , "Husky");

console.log(husky);


// 8 -Metodos na funcao contrutora

Cachorro.prototype.uivar = function() { // adicionar metodo a este tipo de classe
    console.log("Auuuu !!!")
}

husky.uivar();

// 9 - classes es6

class CachorroClasse {
    constructor (nome , raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff" , "Vira-Lata");

console.log(jeff);

class carro {
    constructor (modelo , ano) {
        this.modelo = modelo
        this.ano = ano
    }
}

const hb20 = new carro("HB20" , 2015);

console.log(hb20);