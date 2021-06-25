const dias=document.getElementById('dias');
const horas=document.getElementById('horas');
const minutos=document.getElementById('minutos');
const segundos=document.getElementById('segundos');

const anonovo="1 jan 2022"; 

function countdown(){
    const diadoanonovo= new Date(anonovo);
    const diahoje=new Date();

    const totaldesegundos=new Date(diadoanonovo-diahoje)/1000;
    const diast=Math.floor(totaldesegundos/3600/24);
    const horast=Math.floor(totaldesegundos/3600)%24;
    const minutost=Math.floor(totaldesegundos/60)%60;
    const segundost=Math.floor(totaldesegundos)%60;

    dias.innerHTML=diast;
    horas.innerHTML=horast;
    minutos.innerHTML=minutost;
    segundos.innerHTML=segundost;
}
countdown();
setInterval(countdown,1000);