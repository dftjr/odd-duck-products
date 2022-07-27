console.log('Hi');

let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');

let ul = document.querySelector('ul');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let allDucks = [];
let clicks = 0;
let clicksAllowed = 6;

function Ducks(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `assets/${this.name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
}

function getRandomDuck() {
  return Math.floor(Math.random() * allDucks.length);
}

let renderDucksArray =[];

function renderDucks() {
  console.log(renderDucksArray);
  while (renderDucksArray.length < 6) {
    let ranNum = getRandomDuck();
    if (!renderDucksArray.includes(ranNum)){
      renderDucksArray.push(ranNum);
      console.log(renderDucksArray);
    }
  }
  console.log(renderDucksArray);
  let d1 = renderDucksArray.shift();
  let d2 = renderDucksArray.shift();
  let d3 = renderDucksArray.shift();
  console.log(renderDucksArray);
  image1.src = allDucks[d1].src;
  image1.alt = allDucks[d1].name;
  image2.src = allDucks[d2].src;
  image2.alt = allDucks[d2].name;
  image3.src = allDucks[d3].src;
  image3.alt = allDucks[d3].name;
  allDucks[d1].views++;
  allDucks[d2].views++;
  allDucks[d3].views++;
}

function handleDuckClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++
  let clickedDuck = event.target.alt;
  for (let i = 0; i < allDucks.length; i++) {
    if (clickedDuck === allDucks[i].name) {
      allDucks[i].clicks++;
      break;
    }
  }
  renderDucks();
  if (clicks === clicksAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleDuckClick);
    myButton.addEventListener('click', handleButtonClick);
  }
}

function handleButtonClick() {
    renderResults();
}

function renderResults() {
  for (let i = 0; i < allDucks.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allDucks[i].name} had ${allDucks[i].views} views and was clicked on ${allDucks[i].clicks} times`;
    ul.appendChild(li);
  }
}

let duck1 = new Ducks('bag');
let duck2 = new Ducks('banana');
let duck3 = new Ducks('bathroom');
let duck4 = new Ducks('boots');
let duck5 = new Ducks('breakfast');
let duck6 = new Ducks('bubblegum');
let duck7 = new Ducks('chair');
let duck8 = new Ducks('cthulhu');
let duck9 = new Ducks('dog-duck');
let duck10 = new Ducks('dragon');
let duck11 = new Ducks('pen');
let duck12 = new Ducks('pet-sweep');
let duck13 = new Ducks('scissors');
let duck14 = new Ducks('shark');
let duck15 = new Ducks('sweep', 'png');
let duck16 = new Ducks('tauntaun');
let duck17 = new Ducks('unicorn');
let duck18 = new Ducks('water-can');
let duck19 = new Ducks('wine-glass');

allDucks.push(duck1, duck2, duck3, duck4, duck5, duck6, duck8, duck9, duck10, duck11, duck12, duck13, duck14, duck15, duck16, duck17, duck18, duck19);

renderDucks();

myContainer.addEventListener('click', handleDuckClick);
