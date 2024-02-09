/*// 1 - Number
console.log(typeof 2);
console.log(typeof 25.14);
console.log(typeof -127);

// 2 - Operadores Matematicos
console.log(2+4)  // 6
console.log(10 - 5) // 5
console.log(2*2) // 4
console.log(200/2) // 100

console.log(2+2-5*2) // -6

// 3 - Numeros Especiais
// São numericos, porém não funcionam em operaçoes matematicas

console.log(typeof Infinity)
console.log(typeof -Infinity)

console.log(12 * "tt")

console.log(typeof NaN)

// 4 - Tipo String

console.log("String são textos !")
console.log(`Usando crase`)
console.log('Usando aspas simples')

console.log( typeof "String são textos !")
console.log( typeof `Usando crase`)


// 5 -Simbolos especias em string

console.log(" Testando quebra \nde linha")
console.log(" Espaçamento com \t de Tab")

// 6 -Concatenação
// Recurso que uni texto e numeros 

console.log("Primeiro /tab" + 'Segundo' + '3')
console.log("Oi" + ' tudo bem ?')
console.log('Testando com ' + `a ` + ` crase !`)

// 7- Interpolação ou Template String

// Parecido com a concatenação, porém podemos escrever tudo na mesma string

let n = 12
let name = "Fred"
console.log(` O numero favorito do ${name} é ${n}`)

console.log(`Soma de 2 + 2 é: ${2+2}`) // Aqui ele a conversão de number pra string

// 8 - Boolean

// São os dados verdadeiros ou falso
// TRUE and FALSE

console.log(5 > 20)
console.log(5 > 2)
console.log(5 === 5)
console.log(typeof true)

// 9 - Comparações

console.log(5 > 20)  //  se é Maior
console.log(5 < 20)  //  se é Menor
console.log(5 === 5) //  se é extremamente igual
console.log(10 === 9)
console.log(5 >= 20) // se é Maior ou igual
console.log(10 != 9)

// 10 - Comparação de idêntico

console.log(5 == "5") // true
console.log(5 === "5") // false
console.log(5 != "5") // false
console.log(5 !== "5") // true
console.log(5 + "5") // 55
*/

// 11- Operadores Logicos

// Serve para unir 1 ou mais comparações
// and , or e not
// && , || e !

console.log(true && true); // true
console.log(true && false); // false
console.log(5 > 2 && 2 < 10); // true

console.log(5 > 2 && 5 < 2 ); // false

console.log(5 > 2 || 5 > 100 ); // true

console.log(!true); //  False
console.log(5 > 2 || 5 === "alexandre"); // true
console.log(!5 > 2);// false

// 12 - Empty Values

console.log(typeof null , typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null !== undefined);

// 13 - Mudança de tipo 
// exemplos :
// 5 * null = 0
// "5" + 1 = 51
// 'a' * 'b' = NaN














