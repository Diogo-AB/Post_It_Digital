// JavaScript source code

document.addEventListener("DOMContentLoaded", function () {
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var dataAtual = new Date();
    var diaDaSemana = diasDaSemana[dataAtual.getDay()];
    document.getElementById("dataAtual").innerHTML = diaDaSemana;
});
