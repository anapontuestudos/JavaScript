//É usado para verificar diferentes ações com base em diferentes condições.

function verificaCor(){

    let cor = document.getElementById("cor").value;

    switch (cor){

        case "azul":
        document.body.style.backgroundColor = "blue";

        break;
        case "vermelho":
        document.body.style.backgroundColor = "red";
        break;

        case "laranja":
        document.body.style.backgroundColor = "orange"
        break;

        default:
            //se nenhuma das cases acima for excutada essa padrão será
        document.getElementById("texto").innerHTML = "Cor não disponível";

    }
    
}

