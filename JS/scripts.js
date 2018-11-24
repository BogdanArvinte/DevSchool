// DOM Manipulation & Events

const h1 = document.querySelector('h1');
h1.style.color = 'orange';
h1.style.fontFamily = 'sans-serif';

const span = document.querySelector('span');

const audio = document.querySelector('audio');
audio.pla

setInterval(function() {
  span.innerText = Number(span.innerText) + 1;
  h1.style.color = h1.style.color === 'orange' ? 'black' : 'orange';
}, 1000);

const tasks = document.querySelectorAll('li');

tasks.forEach(function(task) {
  task.addEventListener('click', function(event) {
    const item = event.target;
    item.classList.toggle('done');
  });
});


// Function

// exports.a = function a() { return 1 }
// exports.w = function w() {return 'word'};
// exports.b = 12;

// b = function() { return 2 }

// Objects
// {}, new Object()

// Arrays
// [], new Array()

// x = [1,2,3];

// Truthy: !0, [], {}, true, '...'
// Falsy: NaN, 0, '', undefined, null, false


// Primitives
// int? => number
// string
// undefined
// null => object
// boolean
// char? => string
// NaN => number
// Symbol
// object
// array? => object
// function