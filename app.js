//    VARIAVEIS GLOBAIS
let carnes = [];
let carnesCont = []; 
let comanda = 1;

//    CRIANDO ARRAY PARA ARMAZENAR OS VALORES 
for(let x = 0; x < 23; x++){
   carnes[x] = 0;
   carnesCont[x] = 0;
}  


//    ADD
function add(indicie){
   carnes[indicie] += 1;
   console.log(carnes[indicie]);
//    PASSANDO VALORES PARA O HTML
   document.getElementById(indicie).innerHTML = carnes[indicie];
   return carnes[indicie];
}


//    REMOVER
function remover(indicie){
   if( carnes[indicie] > 0){
      carnes[indicie] -= 1;
//    PASSANDO VALORES PARA O HTML
   document.getElementById(indicie).innerHTML = carnes[indicie];
//    CONSOLE.LOG'S
      console.log(carnes[indicie]);
   }
   return carnes[indicie];
}

//    PROXIMA COMANDA
function proximaComanda(){
//    ARMAZENAR ARRAY
   for(let x = 0; x < 23; x++){
      carnesCont[x] += carnes[x];
      carnes[x] = 0;
// REMOVENDO VALORES DO HTHML
   for(let x = 0; x < 23; x++){
      document.getElementById(x).innerHTML = 0;
   }
//    CONSOLE.LOG'S
      console.log("Contador = " + carnesCont[x]);
      console.log(" Carnes = " + carnes[x]);
   }
//    CONTADOR DE COMANDAS
   comanda += 1;
//    PASSANDO VALORES PARA HTML
   document.getElementById("comandaHtml").innerHTML = "Comanda " + comanda;
   return carnesCont, carnes, comanda;
}

//    FINALIZAR A CONTAGEM 
function finalizar(){
    for(let x = 0; x < 23; x++){
      document.getElementById(x).innerHTML = carnesCont[x];
      document.querySelector('html').style.background = "#660000";
   }
}

