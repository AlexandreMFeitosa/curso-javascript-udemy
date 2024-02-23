// 1 - Strict
"use strict";

const opa = "teste";

// 2 - Metodo de debug: console.log
let a = 1;
let b = 2;

if (a == 1){
    a = a + b;
}

console.log(a);

for( let i = 0; i < b; i++) {
    a = a + 2 ;
    console.log(a);
}

if (a > 5) {
    a = 25
}
 console.log(a);

 // Graças ao console.log conseguimos ver se a linha de codigo está com bug;

 // Debug

 let c = 1
 let d = 2

 if( c == 1){
    c = d + 2
 }

 //debugger;

 for ( let i = 0; i < d;i++) {
    c = c + 2
 }

 // 4 - Tratamento de dado por funcao

 function checkNumberr(n) {

    const result = Number(n); // Transformando o parametro em numero, caso seja um numero.
    if(n === result) {
        console.log("Numero aceito !")
    } else {
        console.log("Não é um numero !")
    }
 }

 checkNumberr("3");
 checkNumberr("2");
 checkNumberr(null)

 // Exemplo 2
function checkNumber(n) {
    const result = Number(n) ; // Convertendo em number

    if(Number.isNaN(result)) {
        console.log("Valor incorreto");
        return
    } else {
        console.log("Valor correto !");
        return result
    }
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste")

// 5 - Exceptions

let x = 10;

if (x != 11) {
    throw new Error("o=O valor de x não pode sr diferente de 11 !")
} // Vai mostrar um aviso, porém o usuario não vai ver, por exemplo a regra no program é de que não deve ter um valor diferente de 11, e quando tiver, ele dará erro, um erro programado pela gente !

// 6 - Try Catch

try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa ${error}`);
}
 // 7 - Finally

 // 8 - Assertions

 // São quando os tratamentos de valores passados pelo usuarios, geram um erro, mas apenas os devs, conseguiriam ver, não o usuario !

 function checkArray (arr) {
    if (arr.lenght === 0) {
        throw new Error("O array precisa ter elementos !")
    } else {
        console.log(`O array tem ${arr.lenght} elementos !`)
    }
 }

 checkArray([1,2,3,4,5,6,7,8,9]);
 // checkArray([]);