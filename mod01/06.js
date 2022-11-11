'use strict';
let sqr_root = 0;

const ask = confirm('Should I calculate the square root?');
if (ask === true) {
  let ask_num = prompt('Input number:');
  ask_num = parseInt(ask_num);
  sqr_root = Math.sqrt(ask_num);
  document.querySelector('#target1').innerHTML = sqr_root;
}else if (ask === false) {
  document.querySelector('#target1').innerHTML = "The square root is not calculated";
}
