/*
No js há três principais maneiras de declarar variáveis:
=> var;
=> let;
=> const.
*/

//Diferença entre var, let e const
var pessoa = "Ana";  //usando o var os valores podem ser modificados ao decorrer do código
var pessoa = "Francisca";


let carro = "Vermelho"; 
//let carro = "Azul";   o let não pode ser redefinido no código

let x = 10; //nesse escopo de fora o let é 10

{
    let x = 2; //mas nesse escopo de função o let vale 2
} //o let pode ser mudado mas não como o var


const cidade = "Condado"; //esse valor não será mudado em nenhuma momento do código
