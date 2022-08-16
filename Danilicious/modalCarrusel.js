'use strict'//Abre y cierra modal para despues manejar las iamgenes con slider
const carrusel=document.querySelector('.carrusel');
const transparencia=document.querySelector('.transparencia');
const closeCarrusel=document.querySelector('.closeCarrusel');
const openCarrusel=document.querySelectorAll('.openCarrusel');

const open=function(){
carrusel.classList.remove('hiddencr');
transparencia.classList.remove('hiddencr');
};

const close=function(){
    carrusel.classList.add('hiddencr');
    transparencia.classList.add('hiddencr');
    };
for(let i=0; i < openCarrusel.length; i++)
    openCarrusel[i].addEventListener('click', open);
    /*closeCarrusel.addEventListener('click', close);
    transparencia.addEventListener('click', close);*/
/*
    document.addEventListener('keydown', function (e){
        if (e.key==='Escape'&& !carrusel.classList.contains('hiddencr')){
            close();
        }
    });
*/