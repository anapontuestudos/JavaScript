/* Eventos são ações disparadas pelo usuário na página. A interatividade e dinamicidade
das páginas corre graças ao manejo desses eventos.
*/

function eventoClick(){
    alert ("Você criou um evento de onclick");

};

function duploClick(){
    alert ("Vcê criou um evento ondblclick");

};

function vermelho(){

    let div = document.getElementById("muda");
    div.style.backgroundColor = "red";

};

function azul(){
    let div = document.getElementById("muda");
    div.style.backgroundColor = "blue";
};

function adicionarTexto(){

    let p = document.getElementById("texto");
    //p.append("Você disparou o avento onmousemove <br>");

};


function mudou(){
    console.log("O conteúdo mudou");
};