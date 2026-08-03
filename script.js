/* =========================
   LOADING SCREEN
========================= */

window.addEventListener(
  "load",
  function () {

    setTimeout(
      function () {

        document
          .getElementById(
            "loader"
          )
          .classList
          .add(
            "hidden"
          );

      },
      10000
    );

  }
);


/* =========================
   HERO BUTTON
========================= */

function openSurprise() {

  document
    .getElementById(
      "story"
    )
    .scrollIntoView({

      behavior:
        "smooth"

    });

}


/* =========================
   LOVE LETTER
========================= */

function openLetter() {

  const letter =

    document
      .getElementById(
        "loveLetter"
      );


  letter
    .classList
    .toggle(
      "show"
    );


  if (
    letter
      .classList
      .contains(
        "show"
      )
  ) {

    setTimeout(
      function () {

        letter
          .scrollIntoView({

            behavior:
              "smooth",

            block:
              "center"

          });

      },
      300
    );

  }

}


/* =========================
   PHOTO LIGHTBOX
========================= */

function openPhoto(
  imageSource
) {

  const lightbox =

    document
      .getElementById(
        "lightbox"
      );


  const image =

    document
      .getElementById(
        "lightboxImage"
      );


  image.src =
    imageSource;


  lightbox
    .classList
    .add(
      "show"
    );

}


function closePhoto() {

  document
    .getElementById(
      "lightbox"
    )
    .classList
    .remove(
      "show"
    );

}


/* =========================
   FINAL MESSAGE
========================= */

function showFinalMessage() {

  const message = document.getElementById("finalMessage");

  const text =
    "Gaano man karaming buwan ang lumipas, " +
    "mananatili akong tapat, mapagmahal, at handang " +
    "samahan ka sa bawat yugto ng iyong buhay. " +

    "Hindi ko man masabi palagi kung gaano kita kamahal, " +
    "tandaan mong handa akong ibigay ang lahat para lang maramdaman " +
    "mong mahal na mahal kita. Hindi man kayang tumbasan ng salita " +
    "ang aking nadarama, sana alam mo na mahal kita kahit ano ang mangyari. " +

    "Galingan natin, mahal, para sa ating kinabukasan. " +
    "Alam kong pagod ka sa trahabo mo araw-araw bilang nars, " +
    "pero sana ako ang maging lakas mo para patuloy kang lumaban. " +

    "Palagi akong nandito para suportahan ka, pakinggan ka, at samahan ka " +
    "sa bawat pagsubok na haharapin mo. Huwag mong kalimutan kung gaano kita " +
    "hinahangaan. " +

    "Maligayang Buwanang Pagdiriwang, " +
    "aking Nars Geisha. 💙";


  message.innerHTML = "";

  let number = 0;

  const typing = setInterval(function () {

    message.innerHTML += text.charAt(number);

    number++;

    if (number >= text.length) {
      clearInterval(typing);
    }

  }, 35);

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

  const heart =

    document
      .createElement(
        "div"
      );


  heart.classList.add(
    "floating-heart"
  );


  heart.innerHTML =
    "💙";


  heart.style.left =

    Math.random() *
    100 +
    "vw";


  heart.style.fontSize =

    Math.random() *
    22 +
    15 +
    "px";


  heart.style.animationDuration =

    Math.random() *
    8 +
    8 +
    "s";


  document
    .getElementById(
      "floatingHearts"
    )
    .appendChild(
      heart
    );


  setTimeout(

    function () {

      heart.remove();

    },

    16000

  );

}


setInterval(
  createHeart,
  1800
);


/* =========================
   MONTHSARY COUNTER
========================= */

/*
  Nagsimula noong:
  Hulyo 4, 2025
  12:00 AM
*/

const relationshipDate = new Date(
  2025,
  6,
  4,
  0,
  0,
  0
);


function updateCounter() {

  const now = new Date();


  /*
    Bilangin ang kumpletong buwan.
  */

  let months =

    (
      now.getFullYear()
      -
      relationshipDate.getFullYear()
    )

    * 12

    +

    (
      now.getMonth()
      -
      relationshipDate.getMonth()
    );


  /*
    Petsa pagkatapos ng
    nakumpletong mga buwan.
  */

  let monthDate = new Date(
    relationshipDate.getFullYear(),
    relationshipDate.getMonth() + months,
    relationshipDate.getDate(),
    relationshipDate.getHours(),
    relationshipDate.getMinutes(),
    relationshipDate.getSeconds()
  );


  /*
    Kung hindi pa kumpleto
    ang buwan, bawasan ng isa.
  */

  if (monthDate > now) {

    months--;


    monthDate = new Date(
      relationshipDate.getFullYear(),
      relationshipDate.getMonth() + months,
      relationshipDate.getDate(),
      relationshipDate.getHours(),
      relationshipDate.getMinutes(),
      relationshipDate.getSeconds()
    );

  }


  /*
    Natitirang milliseconds
    pagkatapos ng mga buwan.
  */

  let difference = now - monthDate;


  /*
    Araw
  */

  const days = Math.floor(

    difference

    /

    (
      1000
      *
      60
      *
      60
      *
      24
    )

  );


  difference =

    difference

    %

    (
      1000
      *
      60
      *
      60
      *
      24
    );


  /*
    Oras
  */

  const hours = Math.floor(

    difference

    /

    (
      1000
      *
      60
      *
      60
    )

  );


  difference =

    difference

    %

    (
      1000
      *
      60
      *
      60
    );


  /*
    Minuto
  */

  const minutes = Math.floor(

    difference

    /

    (
      1000
      *
      60
    )

  );


  difference =

    difference

    %

    (
      1000
      *
      60
    );


  /*
    Segundo
  */

  const seconds = Math.floor(

    difference
    /
    1000

  );


  /*
    Ipakita ang bilang.
  */

  document
    .getElementById("months")
    .textContent = months;


  document
    .getElementById("days")
    .textContent = days;


  document
    .getElementById("hours")
    .textContent = String(hours)
    .padStart(2, "0");


  document
    .getElementById("minutes")
    .textContent = String(minutes)
    .padStart(2, "0");


  document
    .getElementById("seconds")
    .textContent = String(seconds)
    .padStart(2, "0");

}


/*
  Patakbuhin agad.
*/

updateCounter();


/*
  I-update bawat segundo.
*/

setInterval(
  updateCounter,
  1000
);

/* =========================
   SLIDESHOW NG MGA GUNITA
========================= */

let slideNumber = 0;


const slides = document.querySelectorAll(".slide");

const progressFill = document.querySelector(".progress-fill");

const progressText = document.querySelector(".progress-text");



function showSlide(number) {


    if (number >= slides.length) {

        slideNumber = 0;

    }


    if (number < 0) {

        slideNumber = slides.length - 1;

    }



    slides.forEach(function(slide){

        slide.classList.remove("active");

    });



    slides[slideNumber].classList.add("active");



    updateProgress();


}




function updateProgress(){


    let totalSlides = slides.length;

    let current = slideNumber + 1;



    let percent =

        (current / totalSlides) * 100;



    if(progressFill){

        progressFill.style.width =
            percent + "%";

    }



    if(progressText){

        progressText.innerHTML =

            current +
            " / " +
            totalSlides;

    }


}




function changeSlide(direction){


    slideNumber += direction;


    showSlide(slideNumber);


}




/* AUTO SLIDE */

setInterval(function(){


    slideNumber++;


    showSlide(slideNumber);


},5000);




/* START */

showSlide(0);
/* =========================
   MUSIC VOLUME
========================= */

const music =

  document.getElementById(
    "backgroundMusic"
  );


if (

  music

) {

  music.volume =

    0.25;

}

/* =========================
   MUSIC CONTROL
========================= */

const backgroundMusic =

  document
    .getElementById(
      "backgroundMusic"
    );


const musicButton =

  document
    .getElementById(
      "musicButton"
    );


const musicText =

  document
    .getElementById(
      "musicText"
    );


/* SOFT BACKGROUND VOLUME */

backgroundMusic.volume =

  0.20;


/* PLAY / PAUSE */

function toggleMusic() {

  if (

    backgroundMusic.paused

  ) {

    backgroundMusic
      .play()
      .then(

        function () {

          musicText.textContent =

            "Mahal kita :*";


          musicButton
            .classList
            .add(
              "playing"
            );

        }

      )

      .catch(

        function () {

          alert(

            "Hindi mabuksan ang musika."

          );

        }

      );

  }

  else {

    backgroundMusic
      .pause();


    musicText.textContent =

      "Play mo :(";


    musicButton
      .classList
      .remove(
        "playing"
      );

  }

}
