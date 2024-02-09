// 1 - Arrays
/*
const lista = [1,2,3,4,5]
console.log(lista)
console.log(typeof lista)

const itens = ["Alexandre" , 1 , true , 4.12, lista]
console.log(itens)

// 2 - Mais sobre Arrays

console.log(itens[2]);
console.log(lista[0]);

// 3 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

const myName = "Alexandre"

console.log(myName.length);

//  4 - Metodos 
const othersNumbers = [1, 2, 3];

const allNumbers = numbers.concat(othersNumbers); // Juntas os dois arrays;

console.log(allNumbers);

console.log(allNumbers.sort()); // Deixa na ordem crescente.

const text = "Algum texto !"

console.log(text.toLocaleUpperCase())

console.log(typeof text.toLocaleUpperCase)

console.log(text.indexOf("g"))

// 5 - Objetos

const person = {
    altura : 1.74 ,
    peso :  65 , 
    idade : 30 ,
    nome : "Alexandre" ,
    lastName : "Moraes"
}

console.log(person);
console.log(person.altura);
console.log(person.idade);
console.log(person.nome);
console.log(person.lastName);
console.log(person.nome.length);

// 6 - Adicionar ou retirar propriedades do objeto

const carro = {
    age: 2012 , 
    modelo: "Hb20"
}

console.log(carro)

carro.cor = "red"; //  Aqui add atributo cor, de valor "red"  no objeto

console.log(carro)

delete carro.age; // excluir a propriedade.

// 7 - Mais sobre Objetos - assing
const obj = {
    a : "teste" ,
    b: true
}
console.log(obj instanceof Object);

const obj2 = {
    c:[]
}

Object.assign(obj2, obj) // assing, usamos para copiar e juntar os atributos, primeiro colocamos o nosso obj e depois adicionamos o que queremos copiar , no caso o obj

console.log(obj2)

// 8 - Conhecendo melhor o Objects

console.log(Object.keys(obj));  // Imprimi as chaves ou atributos
console.log(Object.keys(obj2)); // Imprimi as chaves ou atributos
console.log(Object.keys(carro)) // Imprimi as chaves ou atributos

console.log(Object.entries(carro)) // Imprimi valores e atributos

// 9 - Mutação
const a = {
    name: "Alexandre"
};
 const b = a ; // declaramos que b receberá a ;
 
 console.log(a);
 console.log(b);

 console.log(a === b);

 a.age = 30 ; // acrescentamos o atributo age no objeto a

 console.log(a) // os dois tem o atributo age agora
 console.log(b)

 delete b.age // Deletamos o atributo ;

 console.log(a) // os dois não tem mais o atributo age
 console.log(b)
 
 */

 // 10 -  Loops em array

 const users = ["Mateus" , "Joao", "Pedro" , "Miguel"]

 console.log(users)

 for(let i = 0; i < users.length; i++ ) {
    console.log(`Listando meu usuario: ${users[i]}`)
 }

 // 11 - Push e Pop

 const array = ["a" , "b" , "c"];

 console.log(array);

 array.push("d");

 console.log(array);

 array.pop(); // Serve para remove item

 console.log(array)

 array.push("z" ,"y", "w") //  Podemos usar para adicionar mais elementos, basta separar por virgula;

 console.log(array);

// 12 - Métodos de array: Shift e Unshift

// Shift = Remove o primeiro elemento do array
// Unshift = Adiciona itens ao inicio do array

const array2 = [1 , 2, 3];

 console.log(array2);

 array2.unshift(0); // adiciona elementos no começo do array

 console.log(array2);

 array2.shift(); // Serve para remove item no indice 0 (inicio)

 console.log(array2)

 array2.unshift(0.7 ,0.8, 0.9) //  Podemos usar para adicionar mais elementos, basta separar por virgula;

 console.log(array2);
