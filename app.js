/* ========================= */
/* WEDDING DATE */
/* ========================= */

const weddingDate = new Date(
    'Sep 27, 2027 00:00:00'
).getTime();

/* =========================================
   GENERADOR DE HOJAS CALLENDO
========================================= */

const leavesContainer =
    document.querySelector('.leaves');

/* =========================================
   CREATE LEAVES
========================================= */

for (let i = 0; i < 35; i++) {

    const leaf =
        document.createElement('span');

    leaf.classList.add('leaf');


    /* RANDOM SIZE */

    const size =
        Math.random() * 18 + 10;

    leaf.style.width =
        `${size}px`;

    leaf.style.height =
        `${size}px`;


    /* RANDOM POSITION */

    leaf.style.left =
        `${Math.random() * 100}%`;


    /* RANDOM COLORS */

    const colors = [

        'linear-gradient(135deg,#d4af6a,#b8924f)',

        'linear-gradient(135deg,#e6c27a,#c49b57)',

        'linear-gradient(135deg,#f0d89c,#d4af6a)'

    ];

    leaf.style.background =
        colors[
        Math.floor(
            Math.random() * colors.length
        )
        ];


    /* RANDOM SPEED */

    leaf.style.animationDuration =
        `${Math.random() * 8 + 8}s`;


    /* RANDOM DELAY */

    leaf.style.animationDelay =
        `${Math.random() * 10}s`;


    /* RANDOM ROTATION */

    leaf.style.transform =
        `rotate(${Math.random() * 360}deg)`;


    leavesContainer.appendChild(leaf);

}

/* =========================
   PREMIUM CAROUSEL
========================= */

const slides = document.querySelectorAll('.carousel-slide');
const carousel =
    document.querySelector('.gallery-carousel');
let current = 0;
let startX = 0;

/* =========================
   SHOW SLIDE
========================= */
const show = (index) => {

    slides.forEach((slide, i) => {

        slide.classList.toggle(
            'active',
            i === index
        );

    });

};

/* =========================
   MOVE SLIDE
========================= */

const move = (step) => {
    current =
        (current + step + slides.length)
        % slides.length;

    show(current);
};

/* =========================
   AUTOPLAY
========================= */

setInterval(() => move(1), 4000);

/* =========================
   TOUCH EVENTS (MOBILE)
========================= */

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});


carousel.addEventListener('touchend', (e) => {
    const diff =
        startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
        move(diff > 0 ? 1 : -1);
    }
});


/* =========================
   MOUSE EVENTS (DESKTOP)
========================= */

carousel.addEventListener('mousedown', (e) => {

    startX = e.clientX;

});


carousel.addEventListener('mouseup', (e) => {

    const diff =
        startX - e.clientX;

    if (Math.abs(diff) > 50) {

        move(diff > 0 ? 1 : -1);

    }

});

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

music.volume = 0.4;

let musicStarted = false;


/* ========================= */
/* START MUSIC FUNCTION */
/* ========================= */

async function startMusic() {

    if (!musicStarted) {

        try {

            await music.play();

            musicStarted = true;

            console.log('Música iniciada');

        } catch (error) {

            console.log(
                'El navegador bloqueó el autoplay',
                error
            );
        }
    }
}


/* ========================= */
/* USER INTERACTION EVENTS */
/* ========================= */

document.addEventListener(
    'click',
    startMusic,
    { once: true }
);

document.addEventListener(
    'scroll',
    startMusic,
    { once: true }
);

document.addEventListener(
    'touchstart',
    startMusic,
    { once: true }
);
/* =========================================
   RSVP FORM
========================================= */
const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name =
            document.getElementById("guestName").value;

        const attendance =
            document.getElementById("attendance").value;

        const guests =
            document.getElementById("guests").value;

        const message =
            document.getElementById("message").value;

        const whatsappMessage =
            `🎉 Confirmación de asistencia 🎉

            👤 Nombre: ${name}

            ✅ Asistencia: ${attendance}

            👥 Número de invitados: ${guests}

            💌 Mensaje:
        ${message}`;

        const whatsappURL =
            `https://wa.me/52561306946?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(
            whatsappURL,
            "_blank"
        );
    });
}