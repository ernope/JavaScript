'use strict';
//console.log('This is text is printed to the console.');
// console.log('Howdy partner!');
//  alert('Hi from here too!');

//let ikaint = 23;
//let ikastr = ikaint.toString()
//ikastr++;
//ikastr = ikastr+10;
//ikaint = ikaint+10;

let ikastr = "23"
let ikaint = parseInt(ikastr)

document.querySelector('#target1').innerHTML = ikastr;
document.querySelector('#target2').innerHTML = ikastr;


let nimi = prompt('Anna nimesi.');
document.querySelector('#target2').innerHTML = "Moi "+nimi+"!";