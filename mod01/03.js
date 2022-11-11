'use strict';
let nro1 = prompt('Input nr1:');
let nro2 = prompt('Input nr2:');
let nro3 = prompt('Input nr3:');

const nr1 = parseInt(nro1)
const nr2 = parseInt(nro2)
const nr3 = parseInt(nro3)

let sum = nr1+nr2+nr3;
let keskiarvo = sum/3
let kerto = nr1*nr2*nr3;
document.querySelector('#target1').innerHTML = "Summa: "+sum+"!";
document.querySelector('#target2').innerHTML = "keskiarvo: "+keskiarvo+"!";
document.querySelector('#target3').innerHTML = "Tulo: "+kerto+"!";