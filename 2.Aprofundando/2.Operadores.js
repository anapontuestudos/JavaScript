//Operdores aritméticos (matemáticos)
var a, b, c;
a = b + c; //   '+' '-' '/' '*'


//Atribuição
var valor1 = 2; //  '=' '+=' '-=' '*=' '/+'
var valor2 = 3;

valor1 = valor1 + valor2;
valor1 += valor2;


//Sequência (concatenação)
var nome = "Ana";
var sobrenome = "Francisca";

nomeCompleto = nome + " " +sobrenome; //Nesse caso o "+" está com função de concatenar as duas strings


//Comparação
var num1 = 10;   //retorna 'true' ou 'false' 
var num2 = 20;

// '== igual' '=== igual e de mesmo tipo' '!= diferente'  '!== o valor e o tipo são diferentes?' '<' '>' '>=' 

var total = (num1 == num2);
//document.getElementById("texto").innerHTML=(total);


//Ternário
var idade, eleitor;
var idade = 70;

eleitor = (idade < 18 ) ? "Menor de idade" : "Maior de idade";
// (idade < 18 ) condição a ser calculada
// ? se a condição for atendida, mostre isso
// : se não for atendida, mostre isso


//Lógicos

idosos = !(idade > 60);
document.getElementById("texto").innerHTML=(idosos);
// '&& e' '|| ou' '! não'