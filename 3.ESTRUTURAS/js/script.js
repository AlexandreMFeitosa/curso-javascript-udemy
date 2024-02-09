// 1 - Variaveis
/*
let nome = "Alexandre" ;
console.log(nome);
console.log("Alexandre");

nome = "Alexandre Moraes";
console.log(nome);

const idade = 30;

console.log(idade);

console.log(typeof nome , typeof idade);

// 2 - Mais sobre variaveis

// let @teste = "Invalido"
// let 2teste = "Invalido"
/*
let a = 10;
 b = 20;
 c = 30;

 console.log(a, b, c);

 const nomecompleto = "Alexandre Moraes"

 const nomeCompleto = "Joao da Silva"

 console.log(nomecompleto, nomeCompleto);

 let _teste = "ok"
 let $teste = "ok"

 console.log(_teste , $teste)

 /* 3 - Prompt

 //const age = prompt("Digite a sua idade:")

 // console.log(`Você tem ${age} anos !`)
 */

 // 4 - Alert
 /*
 alert("Cuidado com o cão !")
 const z  = 10

 alert(`Esse numero é ${z}`)
  */

/* 5 - Math

let age = 25.3;
console.log(Math.floor(age)); // Retorna 25 (Arredonda pra baixo)
console.log(Math.floor(5.14)); // Retorna 5 (Arredonda pra baixo)
console.log(Math.max(5, 2, 10, 1)); // Retorna 10 (retorna o maior numero entre os citados)
console.log(Math.ceil(6.14)); //  Retorna 7 (Arredonda pra cima)

// 6 - Consoles

console.log("Teste !");
console.error("error!")
console.warn("aviso!")

// 7 - if

const m = 10

if (m > 5) {
    console.log(`M é maior que ${m}`);
} else {
    console.log('False');
}

const user = "Joao";
if(user === "Joao"){
    console.log(`User valido. Olá ${user} !`)
} else {
    console.log('User invalido !')
}

if(user === 'Maria') {
    console.log('Olá Maria')
}
console.log(user === 'Joao' , user === 'Maria')

// 8 - else 
const loggerdIn = false
if(loggerdIn) {
    console.log("Está autenticado!")
} else {
    console.log(" Não está autenticado!")
}

const q = 10;
const w = 25;

if(q > 5 && w > 20) {
    console.log("Numeros mais alto !")
} else {
    console.log("Os numeros não sao mais altos !")
}

// 9 - Else if

let hours = 15

if (hours <= 12) {
    console.log(" Está de manhã !")
} else if (hours >= 12 && hours <= 18) {
    console.log("Está de tarde !")
} else {
    console.log("Está de noite !")
}

*/

// 10 - Estruturas de repetição
// 10 - WHILE

let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// 11 - Do While
let  o = 10

do {
    console.log(`Valor de o é : ${o}`)
    o--
} while (o > 1) {
    
}

// 12 - for

for(i = 1;i <= 5; i++){
    console.log(i)
}
 // 13 - Break
 // 14 - Continue

 // 15 - Switch

 let day = 5

 switch(day) {
    case 1 :
        console.log(`Hoje é dia ${day}`);
        break;
    case 2 :
        console.log(`Hoje é dia ${day}`);
        break;
    case 3 :
        console.log(`Hoje é dia ${day}`);
        break;
    case 4 :
        console.log(`Hoje é dia ${day}`);
        break;
    case 5 :
        console.log("Erro 404 !")
        default:
 }

 const job = "Advgado"
 switch(job) {
    case "Programador":
        console.log("Você é um programador !")
        break;
    case "Gerente":
        console.log("Você é um Gerente ! ")
        break;
    case "Advogado":
        console.log("Você é um advogado !")
        break;
        default:
            console.log("Profissão não encontrada !")
 }

 // 
