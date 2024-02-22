/* Os arrays são como variáveis que você pode armazenar vários valores.
Diferente dos objetos, os arrays não tem propriedade, nele são armazenados valores
que podem ser acessados pela sua posição no array.
*/

var item1 = "arroz";
var item2 = "feijão";
var item3 = "leite";
//etc
                //0        //1      //2
const lista = ["arroz", "feijão", "leite"];
console.log(lista);
// O 0, 1 e 2 são as posições dos valores no array

//O array acima é chamado de literal, pois seus valores já estão declarados
const outraLista = new Array("arroz", "feijão", "leite");

// Diferença entre array e objeto
const pessoa1 = ["Ana", "Rocha", 19]; //array
const pessoa2 = {nome: "Ana", sobrenome: "Rocha", idade: 19}; //objeto

//Como saber o tamanho de um array
console.log(pessoa1.length);

//Pegar o último item da lista
console.log(pessoa1[pessoa1.length -1]);

//Adicionando item no array 
pessoa1.push("Brasileira");
console.log(pessoa1);

//Como saber se uma variável é um array
console.log(Array.isArray(pessoa1));
