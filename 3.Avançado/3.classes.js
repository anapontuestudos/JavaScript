/* As classes seriam como fábricas para criar os objetos, onde ele constroi (constructor) 
um esqueleto para o seu objetos.  */

class Carro {
    constructor(valor1, valor2, valor3){

        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    };

    // Adicionando métodos 

    buzina (){
        return this.modelo + " Buzina: " +"BIIII"; //esta especificando qual carro buzinou
    };
};

let uno = new Carro("Fiat", "Uno", 2001);
let fusca = new Carro("Fiat", "Fusca", 1990);

console.log(uno.buzina());
