'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i<3; i++){

  const li = document.createElement('li')
  li.innerHTML = names[i]

  document.querySelector('#target').appendChild(li)
 }