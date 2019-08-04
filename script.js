/***************************
** let and const
**************************/
/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;

// throws error as const cannot change
// name6 = 'Jane Miller';
console.log(name6);
*/

/*
//ES5
function driversLicense5(passedTest){
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1998;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    
}
driversLicense5(true);

//ES6
function driversLicense6(passedTest){
    const yearOfBirth = 1998;
    let firstName;
    if(passedTest){
        firstName = 'John'; 
      }
    // let and const is block based
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    
}
driversLicense6(true);
*/

/*
let i = 23;
for(let i = 0; i < 5; i++){
    console.log('let ' + i);
 }
console.log(i);

var x = 23;
for(var x = 0; x < 5; x++){
    console.log('var ' + x);  
  }
console.log(x);

*/
/***********************************
***  Blocks and IIFES
**********************************/

// ES6 
{
    const a = 1;
    let b = 2;
}
//console.log(a,b);

// ES5
(function(){
    var c = 3;
})();
//console.log(c);


/***********************************
***  Strings
**********************************/
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1980;
function calcAge(year){
    return 2019 - year;  
  }

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('Sm'));
console.log(`${firstName} `.repeat(5));




/***********************************
***  Arrow functions
**********************************/

const years = [1998, 1965, 1948, 1980];

//ES5 
var age5 = years.map(function(el){
   return 2019 - el; 
});
console.log(age5);


let age6 = years.map(el => 2019 -el);
console.log(age6);

// more than one arguement
age6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(age6);

// multiple lines
age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
  });

console.log(age6);


/***********************************
***  Arrow functions 2
**********************************/

// ES5 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
// box5.clickMe();

// ES6 
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
         document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
         document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();












