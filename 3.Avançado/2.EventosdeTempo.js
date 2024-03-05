/* Eventos de tempo em js
Esses eventos só são executados a partir do tempo estabelecido pelo desenvolvedor.

os dois métodos são:
setTimeout(function, tempo em milisegundos)
-> Executa essa função depois de rolar o tempo estabelecido

setInterval(function, milisegundos)
-> funciona como o método acima, mas repete a função com base no tempo/intervalo estabelecido

*/


// setTimeout
function ativarContagem(){
    document.getElementById("texto").innerHTML = "Começou!"
    
    setTimeout(function(){ // Ativa a função 1 vez após o tempo determinado (5000 milisegundos = 5 segundos)
        document.getElementById("texto").innerHTML = "ativou o setTimeout";}, 5000)
};

function pararContagem(){

    clearTimeout (ativarContagem()); // Cancela a contagem
    document.getElementById("texto").innerHTML = "Parou a contagem";

};

// setInterval
function começarContagem(){

    tempo = setInterval(function(){
        var cronometro = document.getElementById("texto2").innerHTML;
        var incremento = parseInt(cronometro) +1; // parseInt transforma o cronometro em inteiro pois por padrão é lido como string
        document.getElementById("texto2").innerHTML = incremento;
    }, 1000)

};

function paraContagem(){
    clearInterval(tempo);
}

