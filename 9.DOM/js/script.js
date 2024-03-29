// 2 - selecionando por Tag
const listItens = document.getElementsByTagName("li");

// vai pegar todas as tag <li>

// 3 - selecionado elemento por ID

const title = document.getElementById("title");

console.log(title);

// 4 - selecionando elemento por classe

const product = document.getElementsByClassName("prodocut");

console.log(product);

// 5 - Selecionando os elementos por CSS

// Com o método querySelectotAll selecionamos um conjunto de elementos por meio de um seletor de CSS;
//E com o querySelector apenas um elemento, com base também um seletor de CSS;

const productQuery = document.querySelectorAll(".product");

console.log(productQuery);

// Caso queira selecionar apenas um dos elementos

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// Alterando o HTML através do DOM

// Podemos mudar praticamente todo HTML com DOM, adicionar, remover, até clonar elementtos.

// Alguns metódos muito ultilizados são : insertBefore => vai inserir um elemento antes do outro; 
// 
// appendChild => Vai inserir dentro do outro;

//  replaceChild => Vai trocar um elemento por outro;

// 6 - Alterando o HTML co insertBefore

// È necessario criar um elemento com JS, isso pode ser feito com metodo : createElement

// O elemento de referencia pode ser selecionado com alguns dos métodos de que vimos antes;

const main = document.createElement("main")

const header = title.parentElement;

console.log(header);

header.insertBefore(main, title); // Agora dentro do header, antes do elemento title, teremos um paragrafo.

// criamos uma tag no html.

// 7 - AppendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo "

header.replaceChild(h2 , title);


// 9 - createTextNode

const myText = document.createTextNode("Agora vamos colocar mias um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// 10 - Trabalhando com atributos

const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href" , "https://www.google.com");

firstLink.setAttribute("target", "_blank");

// 11 - Altura e largura

const footer = document.querySelector("footer");

console.log(footer.offsetHeight); // mostrar a Altura do elemento
console.log(footer.offsetWidth); // mostrar a Largura do elemento

// 12 - Posições do elemento

console.log(footer.getBoundingClientRect());

// Outro exemplo:
const body1 = document.querySelector("body");

console.log(body1.getBoundingClientRect());

