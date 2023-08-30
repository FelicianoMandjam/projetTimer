// Sélection des éléments HTML
const heure = document.querySelector('#heure');
const minutes = document.querySelector('#min');
const seg = document.querySelector('#seg');
const mseg = document.querySelector('#mseg');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnRestart = document.querySelector('#restart');

let t;
let h = 0;
let mn = 0;
let s = 0;
let ms = 0;

function update_chrono() {
    ms += 1;

    if (ms === 10) {
        ms = 0;
        s += 1;
    }
    if (s === 60) {
        s = 0;
        mn += 1;
    }
    if (mn === 60) {
        mn = 0;
        h += 1;
    }

    // Mettre à jour les affichages
    heure.innerHTML = h + "h";
    minutes.innerHTML = mn + "min";
    seg.innerHTML = s + "s";
    mseg.innerHTML = ms + "ms";
}

function start() {
    t = setInterval(update_chrono, 100);
    btnStart.disabled = true;
}

function stop() {
    clearInterval(t);
    btnStart.disabled = false;
}

function restart() {
    clearInterval(t);
    h = 0;
    mn = 0;
    s = 0;
    ms= 0;
    heure.innerHTML = "0 h";
    minutes.innerHTML = "0 min";
    seg.innerHTML = "0 s";
    mseg.innerHTML = "0 ms";
    btnStart.disabled = false;
}

btnStart.addEventListener("click", () => {
    start();
});

btnStop.addEventListener("click", () => {
    stop();
});

btnRestart.addEventListener("click", () => {
    restart();
});
