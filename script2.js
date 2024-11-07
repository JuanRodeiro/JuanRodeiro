let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

const cambiarFondoNav=()=>{
    if(window.innerHeight * 0.85 < window.scrollY){
        document.querySelector("nav").classList.add("fondoNav")
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
    }
}

function start(){
    var imagenes = document.querySelectorAll('#cajaimagenes img');
     soltar = document.getElementById('dropzone');  
     soltar2 = document.getElementById('dropzone2'); 
     soltar3 = document.getElementById('dropzone3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    soltar.addEventListener('dragenter', function(e){e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);

    soltar3.addEventListener('dragenter', function(e){e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);
}

function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
    e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++
}


function restart() {
    window.location.reload();
}

start()