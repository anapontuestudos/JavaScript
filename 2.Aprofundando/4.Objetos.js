/*Os objetos são variáveis com muitos propriedades. Essas propriedades,
diferentemente dos arrays, podem ter valores, por exemplo:

const carro = {marca: "ford", modelo: "ka", etc};

marca é a propriedade e "ford" o seu valor.
*/


let carro = {
    marca: "ford",
    cor: "preto", 
    modelo: "ka",
    buzina: function(){
        alert("BIIIIIIIIIIIII");
    },
    completo: function(){
        return "A marca é " + this.marca
    }
    
};

//Chamando o objeto
console.log(carro);

//Chamando o método
carro.buzina();




//É costume entre desenvolvedores javascript declarar objetos como constantes.

