//Open t7 folder in your IDE/editor.
// Make a hover effect with JavaScript. (2p)
//when user mouses over <p id="trigger"> change the picture of
// <img id="target"> form picA.jpg to picB.jpg
//when user mouses off, change the picture back to original

function avaa(){
    document.getElementById('target').src = 'img/picA.jpg';
}
function sulje(){
    document.getElementById('target').src = 'img/picB.jpg';
}
button.addEventListener('mouseover', avaa);
button.addEventListener('mouseout', sulje);