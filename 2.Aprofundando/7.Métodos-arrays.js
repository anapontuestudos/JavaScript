//join: adiciona outro elemente que separa os elemntos do array
const pessoa = ["Ana", "Rocha", 19, "Brasileira"]; //array
document.getElementById("p1").innerHTML = pessoa.join(" : ");


//pop: remove o último item do array
const pessoa2 = ["Bianca", "Rocha", 17, "Brasileira"];
pessoa2.pop();
document.getElementById("p2").innerHTML = pessoa2;


//push: adiciona um item no fim do array
//unshift: adiciona um item no começo
//shift: remove o primeiro item
const pessoa3 = ["Bruna", "Rocha", 15, "Brasileira"];
pessoa3.push ("Religiosa");
document.getElementById("p3").innerHTML = pessoa3;


//delete: apaga o item da posição que você determinar(apaga o item e preserva a posição, que fica como undefined)
const pessoa4 = ["Bruna", "Rocha", 15, "Brasileira"];
delete pessoa4[0];
document.getElementById("p4").innerHTML = pessoa4;


/* splice: pode adicionar e remover itens do array pela posição que for determinada */
const pessoa5 = ["Bruna", "Rocha", 15, "Brasileira"];
pessoa5.splice(1, 0, "item1", "item2");
// 1 = apartir de qual posição o slice vai mexer
// 0 = os itens que o slice vai remover
// "item1..." = quais valores serão adicinados
document.getElementById("p5").innerHTML = pessoa5;


// concat: concatena arrays a um único array
const pessoa6 = ["Bruna", "Rocha", 15, "Brasileira"];
const pessoa7 = ["Ana", "Rocha", 19, "Brasileira"];

const pessoasTotal = pessoa6.concat(pessoa7); //para concatenar mais arrays basta separar por vírgula
document.getElementById("pTotal").innerHTML = pessoasTotal;


// slice: para "cortar" o array
const pessoa8 = ["Bianca", "Rocha", 17, "Brasileira"];
const pessoa8Dividida = pessoa8.slice(2, 3); //vai pegar só a posição 2, pois estabelecemos o limite que é o 3
document.getElementById("pDividida").innerHTML = pessoa8Dividida;


// sort: organiza o array em ordem alfabetica
const pessoa9 = ["Bianca", "Rocha", 17, "Brasileira"];
pessoa9.sort();
// reverse: vai colocar em ordem "desalfabetica"
document.getElementById("p9").innerHTML = pessoa9;


// organizando os números em ordem númerica
const numeros = [10, 1, 5, 60, 22, 48];
numeros.sort(function (a, b){return a - b });

// utilizar essa função faz com que o sort organize os números do menor para o maior
// para fazer do maior número para o menor é só trocar o lugar do b e do a
document.getElementById("num").innerHTML = numeros;


// pegar o maior número de um array
const numeros2 = [10, 1, 5, 60, 22, 48]; 
document.getElementById("num2").innerHTML = maiorNumero(numeros2);

function maiorNumero(array){

    return Math.max.apply(null, array)

};
/* menornumero
function menorNumero(array){

    return Math.min.apply(null, array)
}; 
*/


// filtragem dos números
const numeros3 = [10, 1, 5, 60, 22, 48];
const maior20 = numeros3.filter(filtragem);

function filtragem (value, index, array){
    return value > 20;
}

document.getElementById("num3").innerHTML = maior20;
