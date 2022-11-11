'use strict';
let name_input = prompt('Input your name:');

if (name_input === "Anna")
  document.querySelector('#target1').innerHTML = "Anna, you are Ravenclaw";
else
  var noppa = Math.floor(Math.random() * 4)+1;
  switch (noppa){
    case 4:
      document.querySelector('#target1').innerHTML = name_input+" You are Ravenclaw";
      break
    case 3:
      document.querySelector('#target1').innerHTML = "You are Hufflepuff";
      break
    case 2:
      document.querySelector('#target1').innerHTML = "You are Slytherin";
      break
    case 1:
      document.querySelector('#target1').innerHTML = "You are Daredevil";
      break
}