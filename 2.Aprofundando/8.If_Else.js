//If (se) else(senão)

// Verificar nome

function verificar(){
    let nome = document.getElementById("nome").value;

    if (nome =="" || nome ==null){
        
        document.getElementById("texto").innerHTML="Preencha o campo corretamente caralho!";

    }else{
        document.getElementById("texto").innerHTML="Seu nome foi verificado seu corno"
    }

};