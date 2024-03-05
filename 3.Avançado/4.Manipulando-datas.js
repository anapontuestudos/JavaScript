//Data padrão
let data = new Date();
console.log(data);

//Ano
let ano = data.getFullYear();
console.log(ano);

//Mês (pega os meses de 0 a 11 onde: 0 é janeiro e 11 e dezembro)
let mes = data.getMonth();
console.log(mes);

const mesesOrganizados = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log(mesesOrganizados[data.getMonth()]);

//Dia do mês
let diaMes = data.getDate();
console.log(diaMes);

//Pegar dia da semana - 0 a 6
let diaSemana = data.getDay();
console.log(diaSemana); 

//Pegar hora - 0 a 23
let hora = data.getHours();
console.log(hora);

//Pegar minutos - 0 a 59
let minutos = data.getMinutes();
console.log(minutos);

//Data no formato brasileiro - Dia / Mês / Ano
let dataBR = data.toLocaleString("pt-br", {dateStyle: 'short'});
console.log(dataBR);

//Comparar datas
let hoje = new Date();
let vencimento = new Date(2024, 2, 6);

if (hoje > vencimento){
    console.log("Está vencido!");

}else{
    console.log("Não está vencido!");

}
