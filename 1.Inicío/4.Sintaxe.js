//O js é uma linguagem case sensitive
var pessoa = "Ana";
//É diferente de:
var PESSOA = "Francisca";


//Operadores de Incremento e Decremento: ++ e --
var count = count + 1; //é igual  a:
count++;

//Operadores de atribuição aritmética: +=, -=, *=, /= e %=
var count = count + 2;
count += 2;

//Pré e Pós incremento e decremento
var x = 2;
var y = 1;

x = y++; //No primeiro caso, temos um pós-incremento. Primeiro o valor de y é atribuído a x, só depois a variável y é incrementada.
x = ++y; //Primeiro y se incrementa e passa a valer 2. Só depois disso x recebe o novo valor.
console.log(x);
console.log(y);
