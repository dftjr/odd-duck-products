


console.log('Hi');

// Total rounds before code is haulted
let totalRounds = 25;

// Conductor representing the ducks
function Ducks(name, image) {
  this.name = name;
  this.image = image;
  this.views = 0;
  this.clicks = 0;
}

function getRandomDuck() {
  return Math.floor(Math.random() * allDucks.length);
}

// Array holding the created ducks
let allDucks = [];
console.log(allDucks);

// Ducks to be created
let duck1 = new Ducks('duck1', 'jpg1');
let duck2 = new Ducks('duck2', 'jpg2');
let duck3 = new Ducks('duck3', 'jpg3');
let duck4 = new Ducks('duck4', 'jpg4');
let duck5 = new Ducks('duck5', 'jpg5');
let duck6 = new Ducks('duck6', 'jpg6');
let duck7 = new Ducks('duck7', 'jpg7');

allDucks.push(duck1, duck2, duck3, duck4, duck5, duck6, duck7);
console.log(allDucks);

function renderDucks() {
  let d1 = getRandomDuck();
  let d2 = getRandomDuck();
  let d3 = getRandomDuck();
  while (d1 === d2 || d1 === d3 || d2 === d3) {
    d1 = getRandomDuck();
     while(d2 === d3) {
      d2 = getRandomDuck();
    }
  }
  console.log(d1, d2, d3);
}
renderDucks();






// function renderResults() {
//   let ul = document.querySelector('ul');
//   for (let i = 0; i < allDucks.length; i++) {
//     let li = document.childElement('li');
//     li.textContent = ${allDcuks[i].name }
//   }
// }

// function renderDucks() {
//   let duck1 = getRandomDuck
// }
