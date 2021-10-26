let btn = document.querySelectorAll("button");
let tempo = document.querySelector("#cronometro");
let millis = 0;
let date = new Date();
let timer;

date.setHours(0, 0, 0, 0);

// STARTA O CRONÔMETRO

btn[0].addEventListener("click", () => {
    timer = setInterval(cronometro, 100);
    btn[0].style.backgroundColor = "#30FCB6";
    btn[0].innerHTML = "Começar";
    btn[1].style.backgroundColor = "rgb(240, 240, 240)";
    btn[2].style.backgroundColor = "rgb(240, 240, 240)";
});

// PARA O CRONÔMETRO

btn[1].addEventListener("click", () => {
    clearInterval(timer);
    btn[0].style.backgroundColor = "rgb(240, 240, 240)";
    btn[0].innerHTML = "Reiniciar";
    btn[1].style.backgroundColor = "#F9AE0F";
    btn[2].style.backgroundColor = "rgb(240, 240, 240)";
});

// ZERA O CRONÔMETRO

btn[2].addEventListener("click", () => {
    clearInterval(timer);
    millis = 0;
    date.setHours(0, 0, 0, millis);
    tempo.innerHTML = `00:00:00.000`;
    btn[0].style.backgroundColor = "rgb(240, 240, 240)";
    btn[0].innerHTML = "Começar";
    btn[1].style.backgroundColor = "rgb(240, 240, 240)";
    btn[2].style.backgroundColor = "#FF3330";
})

function cronometro() {
    millis += 100;
    date.setHours(0, 0, 0, millis);
    let horas = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let minutos = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let segundos = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    tempo.innerHTML = `${horas}:${minutos}:${segundos}.${date.getMilliseconds()}`;
};