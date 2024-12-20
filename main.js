/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

//frontend

 let frontend = document.querySelector('a:nth-of-type(1)')

// Stap 2: addEventListener
// bibberLink.addEventListener...
frontend.addEventListener('dblclick', bibberen)

function bibberen() {

  frontend.classList.toggle('bibberend-dingetje')
}

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle... 

//design, development, sprint5, fix en
let design = document.querySelector('a:nth-of-type(2)')
let development = document.querySelector('a:nth-of-type(4)')
let sprint5 = document.querySelector('a:nth-of-type(5)')
let fix = document.querySelector('a:nth-of-type(6)')
let the = document.querySelector('a:nth-of-type(7)')
document.addEventListener('keydown', grow)

function grow(event) {
  if(event.key == 'q') {
    design.classList.toggle('ease-out')
  }
  
  if(event.key == 'r'){
    development.textContent = 'R'
  }

  if (event.key == 'i' && development.textContent === 'R') {
    sprint5.textContent = 'I'
  }

  if (event.key == 'c' && sprint5.textContent === 'I') {
    fix.textContent = 'C'
  }

  if (event.key == 'k' && fix.textContent === 'C') {
    the.textContent = 'K'
  }
}

//and

// Volgende knop gaat iets toevoegen aan de knop zelf..
// Als Enter op knop 3, moet er 'Rick' toegevoegd worden aan de knop..
// knop.textContent = knop.textContent + 'Rick'

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener ('click', function(event){
  event.preventDefault();
  and.textContent = and.textContent + 'Rick';
});