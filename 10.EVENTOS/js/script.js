// 1 - Criando Eventos

let myButton = document.querySelector("#my-button");

myButton.addEventListener("click" , function () {
    console.log("Clicou em mim !")
});

// 2 - Removendo eventos

const secondBtn = document.querySelector("#btn");

function imprimiMensagem () {
    console.log("Teste ...")
};

secondBtn.addEventListener("click" , imprimiMensagem);

const btnRemove = document.querySelector("#other-btn");

btnRemove.addEventListener("click" , () => {
    console.log("Evento removido !");
    secondBtn.removeEventListener("click" , imprimiMensagem) // para remover devemos por entre parenteses o evento (click) e o nome da funcao no caso o imprimirMensagem
});

// 3 - Argumento do Evento

const myTitle = document.querySelector("#myTitle");

myTitle.addEventListener("click" , (event) => {
    console.log(event);
    console.log(event.offsetx);
    console.log(event.pointerType);
    console.log(Event.target);
});

// 4 - Propagaçao
// um elemento pode ativar o evento sem querer, um evento que não é dele e usamos o stopPropagation , para evitar que isso aocnteça.

const containerBtn = document.querySelector("#btn-container");

const btnInsiderContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click" , () => {
    console.log("Evento 1")} );

btnInsiderContainer.addEventListener("click" , (e) => {
    e.stopPropagation();
    console.log("Evento 2")} );