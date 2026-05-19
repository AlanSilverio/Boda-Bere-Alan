/* ========================= */
/* WEDDING DATE */
/* ========================= */

const weddingDate = new Date(
    'Sep 27, 2027 00:00:00'
).getTime();


/* ========================= */
/* COUNTDOWN FUNCTION */
/* ========================= */

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    /* DAYS */

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    /* HOURS */

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    /* MINUTES */

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    /* SECONDS */

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );


    /* UPDATE HTML */

    document.getElementById('days').innerText = days;

    document.getElementById('hours').innerText = hours;

    document.getElementById('minutes').innerText = minutes;

    document.getElementById('seconds').innerText = seconds;
}


/* ========================= */
/* INITIALIZE COUNTDOWN */
/* ========================= */

updateCountdown();

setInterval(updateCountdown, 1000);


/* ========================= */
/* BACKGROUND MUSIC */
/* ========================= */

const music = document.getElementById('bg-music');

let musicStarted = false;


/* ========================= */
/* START MUSIC FUNCTION */
/* ========================= */

function startMusic() {

    if (!musicStarted) {

        music.play();

        musicStarted = true;
    }
}


/* ========================= */
/* USER INTERACTION EVENTS */
/* ========================= */

document.addEventListener(
    'click',
    startMusic
);

document.addEventListener(
    'touchstart',
    startMusic
);