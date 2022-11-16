function rollDie () {
  return Math.ceil(Math.random() * 6);
}

function playDieGame(){
  const resultsElm = document.getElementById('results');
  const ulElem = document.createElement('ul');
  resultsElm.append(ulElem)
  let dieValue = -1;
  while (dieValue != 6){ // numberOfSides tai vaikka 6
    dieValue = rollDie();
    console.log(dieValue);
    const liElem = document.createElement('li');
    liElem.innerText = 'Heiton tulos: ' + dieValue;
    ulElem.append(liElem);
  }
}
playDieGame(6)

//console.log(rollDie(21));
//const dieValue = rollDie(21);
//console.log(dieValue);