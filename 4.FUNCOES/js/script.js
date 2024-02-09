

/*/*
let a = 2 
let b = 4
let c = 10

function somar(n1 , n2) {
   return n1 + n2;
}
const resultado = somar(a , b);
console.log(resultado)


 1 -Criando uma função ;

function minhafuncao() {
    console.log("Testando")
}
minhafuncao();
minhafuncao();

const minhaFuncaoEmVAriavel = function () {
    console.log("Função em variavel")
}
minhaFuncaoEmVAriavel();

// com paramentro ou argumento

function funcaoComParametro(txt) {
    console.log(`Imprimindo um ${txt}`)
}

funcaoComParametro("Texto")
funcaoComParametro("Mesma funcao, resultados diferentes !")

// 2- Return

// Ex:1
function somar2 (a ,b) {
    console.log(a + b)
}
somar2(2,4)

// Ex: 2
function multiplicar (m1 , m2) {
    return m1 * m2
}

console.log(multiplicar(15,2))

// 3 - Escopo

let y = 20

function testandoEscopoFora() {
    let y = 10
    console.log(`O Y dentro dá função é : ${y}`)
}

testandoEscopoFora();

console.log(`O Y fora do escopo é : ${y}`);

// Ex 02:

let nome = "Alexandre fora"

function nomeEscopo () {
    let nome = "Alexandre dentro !";
    console.log(`Meu nome é : ${nome}`);
}

console.log(nome);
nomeEscopo();

// Arrow function

const testeArrow = () => { 
    console.log("Está é uma arrowFunction !");
}

testeArrow();

const parouImpar = (n) => {
    if (n%2 === 0) {
        console.log(`${n} é um numero PAR !`)
        return;
    }
    console.log(`${n} é um numero ÍMPAR !`)
}

parouImpar(7);
parouImpar(10);
parouImpar(153)

// Ex 3:

const testeArrow2 = (t1 , t2) => { return t1 + t2};

console.log(testeArrow2(2,2));

// arrow function resumida

const raizQuadrada = (r) => r**2
console.log(raizQuadrada(4));
console.log(raizQuadrada(5));
console.log(raizQuadrada(12));

// 7 - Parametro Opcional
const multication = function(m,n) {
    if (n === undefined) {
        return m * 2 ;
    }
    return m * n ;
}
console.log(multication(5))
console.log(multication(2,4))

const greeting = (name) => {
    if(!name) {
        console.log("Olá");
        return;
    }

    console.log(`Olá ${name} !`)
}
greeting();
greeting("Alexandre") 
*/

/* 8 - Valor Default

const customGreet = (name, greet = "Óla") => {
    return `${greet}, ${name}`
}
console.log(customGreet("Alexandre"))
console.log(customGreet("Alexandre", "Bom dia"))
console.log(customGreet( "amassou o corinthians !" , "Santos"))

*/
//10 - clouse
// 11 -recursion


