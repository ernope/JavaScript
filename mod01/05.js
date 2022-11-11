'use strict';

let vuosi = prompt('Input year.');

if ((0 === vuosi % 4) && (0 !== vuosi % 100) || (0 === vuosi % 400)) {
  document.querySelector('#target1').innerHTML = vuosi + " year is a leap year";
}else{
  document.querySelector('#target1').innerHTML = vuosi + " year is not a leap year";
}
