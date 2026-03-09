const choices = ["kő", "papír", "olló"];
const jatekosKiir= document.getElementById("jatekosKiir");
const gepKiir= document.getElementById("gepKiir");
const eredmeny= document.getElementById("eredmeny");
const gepkep=document.getElementById("gepkep");
const gyozelem=document.getElementById("gyoz");
const dontetlen=document.getElementById("dont");
const veszteseg=document.getElementById("vesz");


let allasok=[0,0,0];

function Jatek(Choice){
    const gepValaszt=choices[Math.floor(Math.random()*3)];

    
    let nyertes=0;
    if (Choice==gepValaszt){
        nyertes=1;
    }
    else if(choices.indexOf(Choice)<choices.indexOf(gepValaszt)||Choice == "olló" && gepValaszt=="kő"){
        nyertes=0;
        if (Choice == "kő" && gepValaszt=="olló") {
            nyertes=2;
        }
    }
    else {
        nyertes=2;
        
    }
    allasok[nyertes]+=1;
    //console.log(gepValaszt + "  a nyertes: "+nyertes);
    jatekosKiir.textContent=`Játékos választása: ${Choice}`;
    gepKiir.textContent=`Gép választása: ${gepValaszt}`;
    gyozelem.textContent=`Győzelmek száma: ${allasok[2]}`;
    dontetlen.textContent=`Döntetlenek száma: ${allasok[1]}`;
    veszteseg.textContent=`Vereségek száma: ${allasok[0]}`;

    switch (nyertes) {
    case 2:
        eredmeny.innerHTML = `<div style="font-size: 50px; color: green; background-color: rgba(250, 235, 215, 0.8);"><b>Győztél!!</b></div> <p><button onclick="elolrol()" class="repeat">Játék előlről kezdése</button><p>`;
        break;

    case 1:
        eredmeny.innerHTML = `<div style="font-size: 50px; color: black; background-color: rgba(250, 235, 215, 0.8);"><b>Döntetlen</b></div> <p><button onclick="elolrol()" class="repeat">Játék előlről kezdése</button><p>`;
        break;

    case 0:
        eredmeny.innerHTML = `<div style="font-size: 50px; color: red; background-color: rgba(250, 235, 215, 0.8);"><b>Vesztettél!!</b></div> <p><button onclick="elolrol()" class="repeat">Játék előlről kezdése</button><p>`;
        break;

    default:
        break;
}
    
    gepkep.innerHTML = `<img src="${gepValaszt}.png" alt="${gepValaszt}" width="80%">`;
    
}
function elolrol(){
    jatekosKiir.textContent=`Játékos választása: `;
    gepKiir.textContent=`Gép választása: `;
    gyozelem.textContent=`Győzelmek száma: `;
    dontetlen.textContent=`Döntetlenek száma: `;
    veszteseg.textContent=`Vereségek száma: `;
    gepkep.innerHTML = ``;
    eredmeny.innerHTML='';
    allasok=[0,0,0];
}