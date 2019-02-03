/*
Projecte LA TRIBUNA v27- JavaScript
========================================== */



/** Acció scroll sobre barra superior (navbar) **/
/* La barra es desplega quan desplacem avall > 1 pantalla (definit x window.outerHeight) */

window.onscroll = function() {scrollFunction()};

var height = window.outerHeight;

function scrollFunction() {
  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("mobile-navbar").style.top = "0";
    /* Omm visible només per >576px */
    if (window.matchMedia("(min-width: 576px)").matches) {
      document.getElementById('om').style.display = "block";
    }
  }
}



/** Botó-Imago flotant lateral dret **/
/* En fer click funciona com a interruptor mostrant i amagant barra flotant, que discrimina segons amplada de finestra */

function openNav() {
  document.getElementById('logo-menu').style.display = "none";
  if (window.matchMedia("(min-width: 576px)").matches) {
    document.getElementById('navbar').style.display = "block";
  } else {
    document.getElementById('mobile-navbar').style.display = "block";
  }
}

function closeNav() {
  document.getElementById('navbar').style.display = "none";
  document.getElementById('logo-menu').style.display = "block";
}

function closeMobileNav() {
  document.getElementById('mobile-navbar').style.display = "none";
  document.getElementById('logo-menu').style.display = "block";
}

/** Links barra NAVBAR **/
/* Canvio href per scrollIntoView en botons que poden donar problemes en dispositius tàctils */
/* ELIMINO
function goInfo() {
  document.getElementById('info').scrollIntoView();
} */



/* D. Section EQUIP DOCENT ################ */

function openEquip1() {
  document.getElementById('enric-text').style.display = "block";
}

function closeEquip1() {
  document.getElementById('enric-text').style.display = "none";
}

function openEquip2() {
  document.getElementById('nuria-text').style.display = "block";
}

function closeEquip2() {
  document.getElementById('nuria-text').style.display = "none";
}

function openEquip3() {
  document.getElementById('marc-text').style.display = "block";
}

function closeEquip3() {
  document.getElementById('marc-text').style.display = "none";
}

function openEquip4() {
  document.getElementById('remei-text').style.display = "block";
}

function closeEquip4() {
  document.getElementById('remei-text').style.display = "none";
}

function openEquip5() {
  document.getElementById('pere-text').style.display = "block";
}

function closeEquip5() {
  document.getElementById('pere-text').style.display = "none";
}



/* G. Section RECEPTES ################# */

function openPlat01() {
  document.getElementById('plat01-text').style.display = "block";
}

function closePlat01() {
  document.getElementById('plat01-text').style.display = "none";
}


/** BARRA NAVEGACIÓ TOUCH-FRIENDLY **/

/* En obrir cada nou element, hem d'assegurar-nos de tancar tots els que hi pogués haver oberts */
function openCentres() {
  document.getElementById('ul-centres').style.display = "block";
}
function closeCentres() {
  document.getElementById('ul-centres').style.display = "none";
}

function openInfo() {
  document.getElementById('ul-info').style.display = "block";
}
function closeInfo() {
  document.getElementById('ul-info').style.display = "none";
}

function openXarxes() {
  document.getElementById('ul-xarxes').style.display = "block";
}
function closeXarxes() {
  document.getElementById('ul-xarxes').style.display = "none";
}
