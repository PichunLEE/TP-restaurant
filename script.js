// Quand on clique sur l'icone du menu burger, ajouter un evenement pour dérouler le menu 

let icone = document.getElementById('nav-toggle');

//Je recupere id de ma nav-list avec un query selector(#nav-list)
let navList = document.querySelector('.nav-list');

//Je soumet l'icone du menu burger à un evenement -> Un click 

/*
icone.addEventListener('click', function(){
    console.log('bouton cliqué');
    //Je veux afficher la nav_list quand je clique sur l'icone
    navList.style.display = "block";
});
*/

//Quand je re clique sur menu, je ferme l'affichage 

/*
let isMenuOpen = false; // False parce que le menu est fermé lorsqu'on arrive sur le site
navList2 = document.querySelector('.nav-list');
icone.addEventListener('click', function(){
    console.log('bouton ouvert');
    if (isMenuOpen === false) { // Si le menu est fermé on veut l'ouvrir
        navList.style.display = "block"; 
        isMenuOpen = true;
    } else {
        navList.style.display = "none"; 
        isMenuOpen = false;
        console.log('bouton fermé');
    } 
});
*/

//Au click sur l'icone on veut que le display none s'enleve et quand on reclique on veut qu'il se rajoute

let iconeBurger = document.getElementById('burger');
let faTimes = document.querySelector('#close');







icone.addEventListener('click', function(){

    navList.classList.toggle('visible');
    faTimes.classList.toggle('d-none');
    iconeBurger.classList.toggle('d-none');




    console.log('ok')

});