/* 1 - Funcao setTimeout

//  A funcao estabelece uma acao para ser executada após um certo tempo.

console.log("Ainda não executou");

setTimeout(function () {
    console.log("Primeiro teste ! 5 Segundos !")
}, 5000);

//Ex 2:

console.log("Ainda não executou");

setTimeout(function () {
    console.log("Segundo teste ! 3 Segundos !")
}, 2000);

console.log("Ainda não executou !");

// 2 - SetInterval

// Igual a setTimeOut, porém sem fim, ele determinar uma funcao de tempo em tempo. Como se fosse um loop infinito !

console.log("Ainda noa começou !")
/*
setInterval(function () {
    console.log("Intervalo assincromo !") // Ele ira repetir a cada 4 segundos ! Não parar!
}, 4000);


console.log("Ainda nao começou 2 !");

 // 3 -Promises
 // As promises (promessas) são execusoes assincronas;
 // è litaralmente uma promessa de um valor que pode chegar em um ponto futuro;
 
const promessa = Promise.resolve(5 + 5); // Resolve é o metodo que vai resolve o que tá entre parentes.

console.log("Algum codigo");

promessa
    .then((value) => {
        console.log(`A soma é ${value}`); 
        return value;
    })
    .then((value) => value - 1) // Then é o metodo que leva a promisse em diante;
    .then((value) => console.log(`Agora é ${value}`))
    
console.log("outro codigo !")

// 4 -Falha na promise

Promise.resolve(`4 * "asd"`)
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valores Invalidos !")
    }
})
.catch((err) => console.log(`Um erro ocorreu : ${err}`))
*/
// 5- Rejeitando promisse

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O numero é maior que 10`)
        } else {
            reject( new Error(" Numero muito baixo !"))
        }
    }
)}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`)
)

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu : ${err}`))


// 6 - Resolvendo muitas promises
// com o metodo all podemos executar varias promessas

const p1 = new Promise((resolve , reject) => {
    setTimeout(function() {
        resolve(10)
    }, 3000);
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve,reject) => {
    if(30 > 10) {
        resolve(30)
    } else {
        reject("Erro!");
    }
})

Promise.all([p1,p2,p3]).then((values) => console.log(values));

// 7 - Async Functions

async function somarComDelay(a,b) {
    return a + b
};

somarComDelay(2,2).then((value) => {
    console.log(`A soma é ${value}`)
});

console.log("Teste ASYNC");

//Exemplo 2 =

async function multiplicarNumber(c,d) {
    return c * d
}

multiplicarNumber(2,2).then((value) => {
    console.log(`A multiplicação é ${value}`)
})

//Exemplo com string;

async function nameLastName(nome , sobrenome) {
    return ` ${nome} ${sobrenome} `
};

nameLastName("Alexandre" , "Moraes").then((value) => {
    console.log(`Meu nome completo é ${value}`)
});

// 8 - Async Await
// Instrução await serve para aguardar o resultado de uma async function

function resolveComDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolveu a promise !")
        }, 3000);
    })
}

async function chamadaAsync(){
    console.log("Chamando a promise, e esperando o resultado !")

    const result = await resolveComDelay();

    console.log(`O resultado chegou : ${result}`);

};

chamadaAsync();

// 9 - Generators
// Funcionam parecido com promise.
// Açoes podem ser pausadas e continuadas depois
// Temos novos operadores, como FUNCTION* e YIELD
