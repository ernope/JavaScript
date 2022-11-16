function rollDie (numberOfSides) {
  return Math.ceil(Math.random() * numberOfSides);
}

function playDieGame(numberOfSides){
  const resultsElm = document.getElementById('results');
  const ulElem = document.createElement('ul');
  resultsElm.append(ulElem)
  let dieValue = -1;
  while (dieValue != numberOfSides){ // numberOfSides tai vaikka 6
    dieValue = rollDie(numberOfSides);
    console.log(dieValue);
    const liElem = document.createElement('li');
    liElem.innerText = 'Heiton tulos: ' + dieValue;
    ulElem.append(liElem);
  }
}
const dieSize = prompt('Nopan silmälujen lkm?')
playDieGame(dieSize)

//console.log(rollDie(21));
//const dieValue = rollDie(21);
//console.log(dieValue);