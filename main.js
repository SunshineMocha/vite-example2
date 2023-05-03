import './style.css'
import {CatService} from "./services/cat-service"
import confetti from 'canvas-confetti';

// CatService.getBreeds().then(data => {
//   console.log(data)
//   displayBreeds(data)
//   fireConfetti()
// });

// CatService.getFacts().then(data => {
//   console.log(data)
//   displayFacts(data)
//   fireConfetti()
// });

function meowBreeds() {
  //console.log("meow");
  CatService.getBreeds().then(data => {
    //console.log(data)
    displayBreeds(data)
    fireConfetti()
  });
}

function meowFacts() {
  //console.log("meow");
  CatService.getFacts().then(data => {
    //console.log(data)
    displayFacts(data)
    fireConfetti()
  });
}

const meowBreedBtn = document.getElementById('catbreeds-btn');
const meowFactsBtn = document.getElementById('catfacts-btn');

meowBreedBtn.addEventListener('click', meowBreeds)
meowFactsBtn.addEventListener('click', meowFacts)

function displayFacts(data){
  const container = document.getElementById('cat-container');
  for(const factObj of data) {
      container.innerHTML += `<li>${factObj.fact}</li>`
  }
}
function displayBreeds(data){
  const container = document.getElementById('cat-container');
  for(const breedObj of data) {
      container.innerHTML += `<li>${breedObj.breed}</li>`
  }
}

function fireConfetti(){
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}