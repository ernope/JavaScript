/*let ikastr = prompt("Anna ikasi");
let ikaint = parseInt(ikastr);
if (ikaint < 18)
  document.querySelector('#p1').innerHTML = 'olet alaikäinen';
else if(ikaint == 18)
  document.querySelector('#p1').innerHTML = 'Olet juuri täysi-ikäistynyt';
else
  document.querySelector('#p1').innerHTML = 'Olet aikuinen';*/

let noppa = 0
let laskuri = 0

while(noppa!=6){
  noppa = Math.random(6)+1
  laskuri++
}

document.querySelector('#p1').innerHTML = 'Heitit noppaa '+laskuri+' kertaa saadaksesi silmäluku 6';