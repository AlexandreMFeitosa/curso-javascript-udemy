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

// 5 - Açoes default

const a = document.querySelector("a");

a.addEventListener("click" , (e) => {
    e.preventDefault(e)

    console.log("Não alterou a página !");
});

// 6 - Eventos de tecla

document.addEventListener("keyup" , (e) => {
    console.log(`Apertou a tecla ${e.key}`); // se apertar e soltar o teclado;
})

document.addEventListener("keydown" , (e) => {
    console.log(`Pressionou a tecla ${e.key}`); // Pressionar o teclado e nao soltar, não para de digitar
})

// 7 - Eventos de mouse

const mousePad = document.querySelector("#testeMouse");

mousePad.addEventListener("mousedown" , (e) => {
    console.log("Pressionou o mouse !");
})

mousePad.addEventListener("mouseup" , (e) => {
    console.log("Soltou o mouse !");
})

mousePad.addEventListener("dbclick" , (e) => {
    console.log("Clicou o mouse 2x !");
})

// 8 - Movimento do mouse

document.addEventListener("mousemove" , (e) => {
    console.log("Passou o mouse em cima!");
})

// 9 - Evento de scroll

window.addEventListener("scroll" , (e) => {
    if(window.scrollY > 200) {
        console.log("Passou de 200")
    }
})

// 10 - Evento Focus

const myInput = document.querySelector("#my-input");

myInput.addEventListener("focus" , (e) => {
    console.log("Entrou no input !");
})

myInput.addEventListener("blur" , (e) => {
    console.log("Saiu do input !");
})