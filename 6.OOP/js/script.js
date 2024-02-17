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