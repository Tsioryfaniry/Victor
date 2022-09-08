//Animation au scrool : menu passe de transparent à blanc + menu burger passe de blanc à gris
var  nav = document.getElementById('nav');
var  line1 = document.getElementById('line-1');
var  line2 = document.getElementById('line-2');
var  line3 = document.getElementById('line-3');
var  txtleft = document.getElementById('txt-left');
window.onscroll = function(){

    if (window.pageYOffset >100) {

        nav.style.background = "#fff";
        nav.style.boxShadow = "rgb(34 34 43 / 8%) 0px 3px 11px 0px";
        line1.style.background = "rgb(70, 70, 80)";
        line2.style.background = "rgb(70, 70, 80)";
        line3.style.background = "rgb(70, 70, 80)";
        txtleft.style.color = "rgb(70, 70, 80)";

    }
    else{
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
        line1.style.background = "#fff";
        line2.style.background = "#fff";
        line3.style.background = "#fff";
        txtleft.style.color = "#fff";
    }}

//Animation au scrool : Barre de recherche s'affiche
window.addEventListener('scroll', function a() {
    if(window.matchMedia("(min-width:1001px)").matches && window.pageYOffset >100) {
             
       document.getElementById('searchBar').classList.add('scrolled');
    } else {
             
       document.getElementById('searchBar').classList.remove('scrolled');
    }
 });

 //Animation au scrool : Loupe de recherche change de couleur
 
window.addEventListener('scroll', function b() {
    if(window.matchMedia("(max-width:1000px)").matches && window.pageYOffset >100) {

       document.getElementById('img-loupe').src = "../images/loupe-grey.png";
     
    } else {
       document.getElementById('img-loupe').src = "../images/loupe-white.png";     
    }
 });

  //Animation au scrool : logo Vapeprivate change de couleur
window.addEventListener('scroll', function c() {
    if(window.pageYOffset >100) {
       document.getElementById('img').src = "../images/logo-vapeprivate.com-international-red-75px.png";
    } else {
       document.getElementById('img').src = "../images/logo-vapeprivate.com-international-white-75px.png";
    }
 });

   //Animation au scrool : filtre change de couleur
window.addEventListener('scroll', function c() {
    if(window.pageYOffset >100) {
       document.getElementById('imgFiltre').src = "../images/filtre-grey.png";
    } else {
       document.getElementById('imgFiltre').src = "../images/filtre-white.png";
    }
 });

//Animation au survol menu burger : affiche pop up + croix menu buger (pc)
 var menuburger = document.getElementById('menu-burger');
 menuburger.onmouseover = function menuburgerover() {

    var menupop = document.getElementById('menu-pop');
    var one = document.getElementById('line-1');
    var two = document.getElementById('line-2');
    var three = document.getElementById('line-3');

    if(window.matchMedia("(min-width:1001px)").matches && menupop.style.display=='none') {        
        menupop.style.display = 'block';
        one.style.transform = "rotate(45deg) translate(5px,6px)";
        two.style.visibility = "hidden";
        three.style.transform = "rotate(-45deg) translate(5px,-5px)";

    } else {
        menupop.style.display = 'none';
        one.style.transform = "rotate(0deg) translate(0px,0px)";
        two.style.visibility = "visible";
        three.style.transform = "rotate(0deg) translate(0px,0px)";

    }
 }

//Animation au survol menu burger : masque pop up + croix menu buger (pc)
 var menuburger = document.getElementById('menu-burger');
 menuburger.onmouseout = function menuburgerout() {

    var menupop = document.getElementById('menu-pop');
    var one = document.getElementById('line-1');
    var two = document.getElementById('line-2');
    var three = document.getElementById('line-3');

    if(window.matchMedia("(min-width:1001px)").matches && menupop.style.display=='block') {    
        menupop.style.display = 'none';
        one.style.transform = "rotate(0deg) translate(0px,0px)";
        two.style.visibility = "visible";
        three.style.transform = "rotate(0deg) translate(0px,0px)";
    } else {
        menupop.style.display = 'none';
        one.style.transform = "rotate(0deg) translate(0px,0px)";
        two.style.visibility = "visible";
        three.style.transform = "rotate(0deg) translate(0px,0px)";
    }
 }

//Animation au survol pop up : laisse afficher pop up + croix menu buger (pc)
 var menupop = document.getElementById('menu-pop');
 menupop.onmouseover = function menupopover() {
    var one = document.getElementById('line-1');
    var two = document.getElementById('line-2');
    var three = document.getElementById('line-3');

    if(window.matchMedia("(min-width:1001px)").matches && menupop.style.display=='none') {
             
        menupop.style.display = 'block';
        one.style.transform = "rotate(45deg) translate(5px,6px)";
        two.style.visibility = "hidden";
        three.style.transform = "rotate(-45deg) translate(5px,-5px)";
      
    } else {
        menupop.style.display = 'none';
        one.style.transform = "rotate(0deg) translate(0px,0px)";
        two.style.visibility = "visible";
        three.style.transform = "rotate(0deg) translate(0px,0px)";
    }
 }

//Animation au survol pop up : masque pop up + croix menu buger (pc)
 var menupop = document.getElementById('menu-pop');
 menupop.onmouseout = function menupopout() {
    var one = document.getElementById('line-1');
    var two = document.getElementById('line-2');
    var three = document.getElementById('line-3');

    if(window.matchMedia("(min-width:1001px)").matches && menupop.style.display=='block') {    
        menupop.style.display = 'none';
        one.style.transform = "rotate(0deg) translate(0px,0px)";
        two.style.visibility = "visible";
        three.style.transform = "rotate(0deg) translate(0px,0px)";
    } else {
        menupop.style.display = 'none';
        one.style.transform = "rotate(0deg) translate(0px,0px)";
        two.style.visibility = "visible";
        three.style.transform = "rotate(0deg) translate(0px,0px)";
    }
 }

 //Animation au click menu burger : affiche pop up (mobile)
 var menupopmobile = document.getElementById('menu-pop_mobile');
 var menuburger = document.getElementById('menu-burger');
 menuburger.onclick = function menuburgerclickon() {
    var body = document.getElementsByTagName('body');
    if(window.matchMedia("(max-width:1000px)").matches && menupopmobile.style.display=='none') {    
        menupopmobile.style.display = 'block';
        body.addEventListener('scroll', noScroll);
    } else {
        menupopmobile.style.display = 'none';
    }
}

 //Animation au click croix pop up : masque pop up (mobile)
 var menupopmobile = document.getElementById('menu-pop_mobile');
 var imgmenupopmobile = document.getElementById('img-menu-pop_mobile');
 imgmenupopmobile.onclick = function menuburgerclickout() {

    if(window.matchMedia("(max-width:1000px)").matches && menupopmobile.style.display=='block') {    
        menupopmobile.style.display = 'none';
    } else {
        menupopmobile.style.display = 'none';
    }
}

//Animation au click loupe: affiche + fait un focus barre de recherche (mobile)
var imgloupe = document.getElementById('img-loupe');
var searchinputmobile = document.getElementById('search-input_mobile');
imgloupe.onclick = function loupeclickon() {
 
    if(window.matchMedia("(max-width:1000px)").matches && searchmobile.style.display=='none') {    
     translateYDown();
     searchinputmobile.focus();
    } else {
     translateYDown();
     searchinputmobile.focus();
    }
 }
 
//Animation au click loupe: affiche + défilement vers le bas page barre de recherche (mobile)
var searchmobile = document.getElementById('searchMobile');
function translateYDown() {
    searchmobile.style.display = 'block';
    searchmobile.animate([
        // étapes/keyframes
        { transform: 'translateY(-969px)' },
        { transform: 'translateY(0px)' }
      ], {
        // temporisation
        duration: 250,

      });
} 

//Animation au click annuler : masque barre de recherche (mobile)
var searchmobile = document.getElementById('searchMobile');
var annuler = document.getElementById('annuler');
annuler.onclick = function annulerclickout() {

    if(window.matchMedia("(max-width:1000px)").matches && searchmobile.style.display=='block') {    
        displayNone();
       } else {
        displayNone();
       }
    }
    
//Animation au click loupe: masque barre de recherche (mobile)
var searchmobile = document.getElementById('searchMobile');
function displayNone() {
    searchmobile.style.display="none";
    }  



//Animation au click filtre: affiche + fait un focus filtre (mobile)
var imgfiltre = document.getElementById('imgFiltre');
var masquefiltre = document.getElementById('masqueFiltre');
imgfiltre.onclick = function Filtreclickon() {
 
    if(window.matchMedia("(max-width:641px)").matches && masquefiltre.style.display=='none') {    
     translateYDownFiltre();
    } else {
     translateYDownFiltre();
    }
 }
 
//Animation au click filtre: affiche + défilement vers le bas page filtre (mobile)
var masquefiltre = document.getElementById('masqueFiltre');
function translateYDownFiltre() {
    masquefiltre.style.display = 'block';
    masquefiltre.animate([
        // étapes/keyframes
        { transform: 'translateY(-969px)' },
        { transform: 'translateY(0px)' }
      ], {
        // temporisation
        duration: 250,

      });
} 

//Animation au click annuler : masque filtre (mobile)
var masquefiltre = document.getElementById('masqueFiltre');
var annulerfiltre = document.getElementById('annulerFiltre');
annulerFiltre.onclick = function filtreclickout() {

    if(window.matchMedia("(max-width:641px)").matches && masquefiltre.style.display=='block') {    
        displayNoneFiltre();
       } else {
        displayNoneFiltre();
       }
    }

//Animation au click blocs filtre : masque filtre (mobile)
var masquefiltre = document.getElementById('masqueFiltre');

function blocsclickout() {
    if(window.matchMedia("(max-width:641px)").matches && masquefiltre.style.display=='block') {    
        displayNoneFiltre();
       } else {
        displayNoneFiltre();
       }
    }
    
//Animation au click filtre: masque barre de recherche (mobile)
var masquefiltre = document.getElementById('masqueFiltre');
function displayNoneFiltre() {
    masquefiltre.style.display="none";
    }  