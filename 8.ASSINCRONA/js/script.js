// 1 - Funcao setTimeout

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
*/

console.log("Ainda nao começou 2 !");



