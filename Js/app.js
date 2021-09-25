const getter = document.querySelector('#psh');
const block = document.querySelector('#parph');
const colors = ['red','green','blue','purple','yellow'];

getter.addEventListener('click', function () {
const color = colors[Math.floor(Math.random()*colors.length)];

block.innerHTML += `<div class='triangle_${color}'></div>`;

});
console.log('hey')