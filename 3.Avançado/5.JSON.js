/*
JSON = Javascript Object Notation.

Basicamente seria uma maneira de converter texto em objetos e objetos em textos.

JavaScript Object Notation (JSON) é um formato baseado em texto padrão para representar 
dados estruturados com base na sintaxe do objeto JavaScript. 
É comumente usado para transmitir dados em aplicativos da Web 
(por exemplo, enviar alguns dados do servidor para o cliente,
para que possam ser exibidos em uma página da Web ou vice-versa). 
Você se deparará com isso com bastante frequência, portanto, neste artigo,
oferecemos tudo o que você precisa para trabalhar com o JSON usando JavaScript,
incluindo a análise do JSON para que você possa acessar os dados dentro dele e criar o JSON.

Link: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON


Os métodos que usamos para trabalhar com json são:

JSON.parse() -> Converte texto no padrão JSON em objetos;
JSON.stringify() -> Converte objetos em texto padrão JSON.
*/

const carro = {
    marca: "fiat",
    modelo: "uno",
    ano: "2001" 
};

//Isso estará convertendo o objeto em um texto para ser mostrado no html
let texto = JSON.stringify(carro);

document.getElementById("area").innerHTML= texto;

/*
Caso eu deseje passar mostar só o modelo do carro por exemplo o resultado apresentado será undifined
por conta do stringify, para tornar novamente um objeto usaremos o parse().
*/

let objeto = JSON.parse(texto);
console.log(objeto.marca);