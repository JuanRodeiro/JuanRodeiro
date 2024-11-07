
const cambiarFondoNav=()=>{
    if(window.innerHeight * 0.85 < window.scrollY){
        document.querySelector("nav").classList.add("fondoNav")
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
    }
}



let transformTiempoActual=(tiempo)=>{
    if(tiempo<60){
        if(tiempo.toFixed(0)<10){
            return `00:0${tiempo.toFixed(0)}`
        }
        return `00:${tiempo.toFixed(0)}`
    }else{
        let minutos=parseInt(tiempo/60)
        let segundos= (tiempo/60 - minutos)*60
        if(segundos<10){
            return `${minutos}:0${segundos.toFixed(0)}`
        }
        return `${minutos}:${segundos.toFixed(0)}`
    }
}

let video = document.querySelector('video');
let pauseButton= document.getElementById("pause");
let playButton = document.getElementById("play");
let timeProgress;

playButton.addEventListener('click',()=>{
    video.play()
    timeProgress=setInterval(()=>{
    document.getElementById('mostrarTiempo').innerHTML=`${transformTiempoActual(video.currentTime)}`},1000)
});

let flag = false;

pauseButton.addEventListener('click',()=>{
    video.pause();
    flag=false;
    clearInterval(timeProgress)
});

