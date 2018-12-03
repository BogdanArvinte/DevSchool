// Template Literals

const oldT = 'first line\n' +
             'second line';
const tl = `first line
            second line`;
const tlV = `Today is ${(new Date(`${new Date()}`)).toLocaleDateString()}`

// console.info(oldT, tl, tlV)

// For...of Loop

const collection = new Set([1,1,2,3,4]);
const collection2 = document.querySelectorAll('p');

for (let item of collection2) {
  // console.info(item);
}

// Arrow Functions

function fPerson() {
  this.lName = 'Popescu';
  const oName = 'Other'
  // (function() {})(1,2,3)
  setTimeout(() => {
    // console.info(`My name is ${this.lName}`);
    (() => {
      // console.info(this.lName, 'still there');
    })();
  }, 1000);

  setTimeout(function bla () {
    // console.info(oName)
  })
}

const person = new fPerson();

// Default Params

(function defaultParam(defName = 'Popescu') {
  // console.info(defName);
})();

// Array.includes()

const arr = [1,2,3,42];

// console.info(arr.includes(41));

// Import & Export

// export [default] *
// import * as var from 'module'
// import { piece } from 'module'

// String.padStart()/.padEnd()

let str = 'sir';
str = str.padStart(10, 'a');
str = str.padEnd(17, 'b');

// console.info(str);

// Classes and async

class Person {
  constructor(name) {
    this.name = name;
    this.day = null;
  }

  speak() {
    console.info('Hi, my name is', this.name);
  }

  async checkDay() {
    const result = await axios.get('https://api.abalin.net/get/today')
      .catch(err => console.error(err.message));

    this.day = result.data.data;
    console.info('This day is named', this.day.name_us);
  }
}

const Ion = new Person('Ion');
Ion.speak();
Ion.checkDay();

// ================================================


// const input = document.querySelector('input')

// input.addEventListener('keyup', function(e) {
//   console.info('Change', e.target.value)
// })

