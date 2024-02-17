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
*/
// 11 - Push e Pop
// add e remove no fim elemento de um array

<<<<<<< HEAD
const letras = ["a" , "b" , "c"]

console.log(letras);

letras.push("d")

console.log(letras);

letras.pop();

console.log(letras);

// 12 - Shift e unshift
// Shift add itens no inicio
// Unshift remove do inicio

// 13 - indexOf e lastIndexOf
/*
const cores = ["red" , "blue" , "green"]

cores.push("red")

console.log(cores.indexOf("red")) // Ele procura o elemento red e nos indica qual indice ele está, nesse caso red está no indice 0

console.log(cores.lastIndexOf("red")) // Nesse caso ele mostrará o indice 3 pois red está no indice 0 e 3, mas mostrará onde está por ultimo

console.log(cores[cores.indexOf("red")])


// 14 - Slice

const fruit = ['Pera' , 'Morango' , 'Laranja' , 'Tomate']

console.log(fruit)

const fruitMeio = fruit.slice(2)
console.log(fruitMeio)


console.log(fruit.slice(0,2)) // Pegou apenas elementos do array entre o indice 0 e 2, no caso "Pera [0] e Morango [1]" , pois o ultimo elemento será sempre ignorado, para inclui-lo temos que somar +1;



console.log(fruit.slice(2, 3+1)) // add o +1 para que apareça o ultimo indice

console.log(fruit.slice(10))  // Quando colocamos um indice que não existe, ele aparece vazio

// 15 - ForEach

// é uma estrutura como for r while, porem é um metodo
// Ele pecorre cada elemento do array

const elementos = ["Fogo" , "Agua", "Terra" , "Vento"]

elementos.forEach((elem)=> {
    console.log(`O elemento é ${elem}`)
})

const nums = [1, 2, 3 , 4, 5]

nums.forEach((n)=> {
    console.log(`Os numeros dessa array são : ${n}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Javascript"},
    {title: "Terceiro post", category: "Python"}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} "${post.category}"`)
})

// 16 - Includes

const roupas = ["Blusa" , "Calça" , "Meia"]

console.log(roupas.includes("Meia"))
console.log(roupas.includes("Casaco")) // Vai retonar valores booleanos

if(roupas.includes("Meia")) {
    console.log('Encontramos a peça procurada !')
} else {
    console.log("Não foi encontrado a peça procurada !") 
}

// 17 - Reverse
// Inverte os array e os modificam 

const position = ["first" , "second" , "third"]

console.log(position) // Ordem normal
console.log(position.reverse()) // Ordem invertida

// Agora quando colocamos apenas o "position" el aestará salva na versao reversa, pois esse metodo reverse, modifica e salva a array original

console.log(position) // Ordem invertida
/*
*/

// 18 - Trim

// Remove tudo que não seja texto, como numero, carascteres eseciais e tals
// Um metodo interessante para sanitização de dados
/*
const senha = "\n  Alerox1993  \n"

console.log(senha);

console.log(senha.trim());

console.log(senha.length);

console.log(senha.trim().length)


// 19 - padStart
// Insere um texto no começo da string

const stringTest = "1"

const newNumber = stringTest.padStart(4, "0") // 10 é o numero maximom de caracteres que vamos ter e o "0" é a string que vai ser add.

console.log(stringTest);
console.log(newNumber); // aqui acrescentamos o "0000" antes do 1

const newNumberFim = newNumber.padEnd(10, "0");

console.log(newNumberFim);

// 20 - Split
// divide uma string em um array
// cada elemento será determinado por um separador em comum;

const testSplit = "A,B,C,D,E,F"
console.log(testSplit)
console.log(testSplit.split(",")) // Usamos o valor virgula como separdor em comum, assim cada elemtno foi separador

console.log(testSplit.split(",").length); // aqui percebemos que a string que tinha 11 elementos, agora transformada em array tem apenas 6 " ['A', 'B', 'C', 'D', 'E', 'F']"

const frase = "O rato roeu a roupa do rei de roma"

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

console.log(arrayDaFrase.length);

// 21 -Join
// Une um array em um string

const uneArray = arrayDaFrase.join(" ");

console.log(uneArray);

console.log(uneArray.length);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

console.log(itensParaComprar);

const testJoin =`Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(testJoin);

// 22 - repeat
// O metodo repeat repete um texto n vezes;

const goal  = "gool, "
const goalRepeat = goal.repeat(5);

console.log(`Partiu ronaldo pra bola, olhou bateu e ... ${goalRepeat} golaaaaçoooo !!!`);

const palavra = "Testando "

console.log(palavra.repeat(5));
*/

// 23 - |Rest Operator / Res Parameters
// Não precisamos definir um total de argumentos, com esse metodo podemos colocar quantos quiserem ...


const somaInfinita = (...args) => {
    let total = 0
    
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(somaInfinita(3, 2 ,1)) // 3 argumentos

console.log(somaInfinita(10,20,30,50,3534,5896,1)) // mais de 3 argumentos

//  24 - Estrutura de repeticao for...of
// é uma estrutura de repetiçao semelhante ao FOR

const somaInfinita2 = (...args) => {
    let total = 0

    for (num of args) {
        total += num;
    }
    return total;
}

console.log(somaInfinita2(1,2,4))
console.log(somaInfinita2(5,0,6,7,20,30,100))

let tot = 0

// DESTRUCTURING EM OBJETOS
// É uma funcionalidade que nos permite desestruturar algum dado;
//no caso de objetos é possivel criar variaveis a partit das suas propriedades com uma simples sintaxe

const userDetails = {
    firstName : "Alexandre" ,
    lastName : "Moraes" , 
    job : "Programador"
}

const {firstName, lastName, job} =  userDetails ;

console.log(firstName, lastName, job);

// Renomear, caso já tenha essas variaveis com mesmo nome
// Caso a variavel firstName já existisse, usei o  destructuring para renomea-lá

const { firstName : primeiroNome} = userDetails; // sintaxe do destructuring

console.log(firstName);

// Destructuring em arrays
// A sintaxe é diferente , usasse colchetes e não chave e não usara nome das chaves firstName : "Alexandre" e sim dos indices (1);

const myList = ["Aviao" , " Submarino" , "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

console.log(veiculoB);

// Conhecendo o Json
// É um dado em formato de texto;
//utilizamos para comunicacao entre API e Front-End
//Regra: Sempre aspas duplas e não aceita comentarios;

const myJson = '{"name" : "Alexandre" , "age": 30 , "skills" : ["PHP","Python"] }'

console.log(myJson);
console.log(typeof myJson);

// Conversão de Json
// JSON para Objeto e Objeto para JSON
// Utilizamos o objeto JSON e os metodos são stringify  e parse
=======
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

*/

 // 28 - Json para objetos e objeto para JSON

 
 // Na maioria das vezes vamos precisar converter objetos para JSON;
 // stringify = Transforma objeto em Json 
 // parse = Transforma um Json e Objeto
 const myJson = '{"name" : "Alexandre" , "age": 30 , "skills" : "["JavaScript" , "Python"]" }'
console.log(myJson);

const myObj = JSON.parse(myJson);// Transformando o JSON myJson em objeto

console.log(myObj)
>>>>>>> 40899d39e9a2c3f2e9950d3c61d57a960773d63d
