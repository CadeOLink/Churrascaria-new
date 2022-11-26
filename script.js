//Variáveis globais
let quantityPerCommand = [];
let contCommand = 1;
let createdCommands = 1;
let totalAmount = [];
//Criando a array para armazenar os dados
totalAmount.push([])
for(let x = 0; x<23; x++){
   totalAmount[0].push(0);
   quantityPerCommand.push(0);
}

//Add
let buttonsAdd = document.querySelectorAll(".add");

for(let x=0;x<buttonsAdd.length;x++){
   buttonsAdd[x].addEventListener("click",(buttonAdd) =>{
      buttonAdd = buttonAdd.path[1];
      quantityPerCommand[x]++;
      totalAmount[createdCommands-1][x]=quantityPerCommand[x];
      buttonAdd.querySelector("span").innerHTML = quantityPerCommand[x];
   })
}

//Remove
let buttonsRemove = document.querySelectorAll(".remove");

for(let x=0;x<buttonsRemove.length;x++){
   buttonsRemove[x].addEventListener("click",(buttonRemove) =>{
      buttonRemove = buttonRemove.path[1];
      if(quantityPerCommand[x]>0){
         quantityPerCommand[x]--;
         totalAmount[createdCommands-1][x]=quantityPerCommand[x];
         buttonRemove.querySelector("span").innerHTML = quantityPerCommand[x];
      }
   })
}

//Copy
let buttonsCopy = document.querySelectorAll(".copy");

for(let x= 0;x<buttonsCopy.length;x++){
   buttonsCopy[x].addEventListener("click",(buttonCopy) =>{
      let copy = buttonCopy.path[1].querySelector("span").innerHTML;
      navigator.clipboard.writeText(copy);
   })
}

//Update quantities
function updateQuantities(){
   let span = document.querySelectorAll("span");
   for(let x=0;x<quantityPerCommand.length;x++){
      span[x].innerHTML = quantityPerCommand[x];
   }
   document.querySelector("#comanda h1").innerHTML = `Comanda ${contCommand}`;
}

//Next command
function next(){
   console.log(totalAmount)
   if(contCommand === createdCommands){
      totalAmount.push([])
      for(let x=0;x<quantityPerCommand.length;x++){
         totalAmount[contCommand].push(0);
      }

      for(let x=0; x<quantityPerCommand.length; x++){
         quantityPerCommand[x] = 0;
      }
      createdCommands++;
   }else{
      quantityPerCommand = totalAmount[contCommand];
   }
   contCommand++;
   updateQuantities();
}

//Back command
function back(){
   if(contCommand>1){
   quantityPerCommand = totalAmount[contCommand-2];
   contCommand--;
   updateQuantities();
   }
}

//finish command
function finish(){
   let finish = [];
   for(let x=0;x<quantityPerCommand.length;x++){
      finish.push(0);
      for(let y=0;y<totalAmount.length;y++){
         finish[x] = finish[x] + totalAmount[y][x];
      }
   }
   quantityPerCommand = finish;  
   updateQuantities();
   document.querySelector("#comanda h1").innerHTML = `Total de comandas: ${createdCommands}`;
   let button = document.querySelectorAll(".transition-between-commands button");
   for(x=0;x<3;x++){
      button[x].style.display = 'none';
   }
}
