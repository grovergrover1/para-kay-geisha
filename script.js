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
      1200
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

  const message =

    document
      .getElementById(
        "finalMessage"
      );


  const text =

"Gaano man karaming buwan ang lumipas, " +

"mananatili akong lubos na nagpapasalamat " +

"sapagkat ikaw ang aking kasama " +

"sa napakagandang paglalakbay na ito. " +

"Maligayang Buwanang Pagdiriwang, " +

"aking Giesha. 💙";

message.innerHTML = "";



  message.innerHTML = "";


  let number = 0;


  const typing =

    setInterval(

      function () {

        message.innerHTML +=

          text.charAt(
            number
          );


        number++;


        if (
          number >=
          text.length
        ) {

          clearInterval(
            typing
          );

        }

      },

      35

    );

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

const slides =

  document
    .querySelectorAll(
      ".slide"
    );


const dots =

  document
    .querySelectorAll(
      ".dot"
    );


function showSlide(
  number
) {

  /*
    Bumalik sa unang larawan
    kapag lumampas sa huli.
  */

  if (
    number >=
    slides.length
  ) {

    slideNumber = 0;

  }


  /*
    Pumunta sa huling larawan
    kapag umatras mula sa una.
  */

  if (
    number <
    0
  ) {

    slideNumber =
      slides.length - 1;

  }


  /*
    Alisin ang "active"
    sa lahat ng larawan.
  */

  slides.forEach(

    function (
      slide
    ) {

      slide
        .classList
        .remove(
          "active"
        );

    }

  );


  /*
    Alisin ang "active"
    sa lahat ng bilog.
  */

  dots.forEach(

    function (
      dot
    ) {

      dot
        .classList
        .remove(
          "active"
        );

    }

  );


  /*
    Ipakita ang
    kasalukuyang larawan.
  */

  slides[
    slideNumber
  ]
    .classList
    .add(
      "active"
    );


  /*
    I-highlight ang
    tamang bilog.
  */

  dots[
    slideNumber
  ]
    .classList
    .add(
      "active"
    );

}


/* SUSUNOD O NAKARAANG LARAWAN */

function changeSlide(
  direction
) {

  slideNumber +=
    direction;


  showSlide(
    slideNumber
  );

}


/* PUMILI NG LARAWAN */

function currentSlide(
  number
) {

  slideNumber =
    number;


  showSlide(
    slideNumber
  );

}


/* AWTOMATIKONG PAGLIPAT */

setInterval(

  function () {

    slideNumber++;


    showSlide(
      slideNumber
    );

  },

  5000

);
