// main js file 

//target coin element
let coin = document.querySelector(".coin");
// target flip button
let flipBtn = document.querySelector("#flip-button");
// target reset button
let resetBtn = document.querySelector("#reset-button");


// set the score that will be incremented

let heads = 0;
let tails = 0;


// establish flip randomization logic and animation time

flipBtn.addEventListener("click", () => {
   let i = Math.floor(Math.random() * 2);

   coin.style.animation = "none";

   if(i){
       setTimeout(function(){
           coin.style.animation = "spin-heads 3s forwards";
       }, 100);
       heads++;
   }
   else{
       setTimeout(function(){
           coin.style.animation = "spin-tails 3s forwards";
       }, 100);
       tails++;
   }

   setTimeout(updateStats, 3000);
   disableButton();
});



// score update function

function updateStats(){
   document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
   document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}



// disable function during the course of a running turn

function disableButton(){
   flipBtn.disabled = true;
   setTimeout(function(){
       flipBtn.disabled = false;
   },3000);
}



// adding event listener function for the reset button, that resets the bord upon click

resetBtn.addEventListener("click",() => {
   coin.style.animation = "none";
   heads = 0;
   tails = 0;
   updateStats();
});