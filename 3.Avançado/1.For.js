// Permite executar de um jeito mais fácil uma ação repetitiva

/* na estrutura do for precisamos de: o ponto inicial, a condição
e o que vai acontecer depois da condição */
for (let i=0; i<=5; i++){
    //ao invés de colo o = é necessário colocar += para que não apague o valor anterior
    document.getElementById("contador").innerHTML += i + ", ";
}


//Percorrer array
const carros = ["Fiat", "Gol", "Fusca", "Brasília"];
var tamanho = carros.length;

for (i = 0; i < tamanho; i++){

    document.getElementById("percorrer").innerHTML += carros[i] + ", ";
};