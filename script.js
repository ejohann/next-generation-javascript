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
/*
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
*/

/***********************************
***  Strings
**********************************/
/*
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

*/


/***********************************
***  Arrow functions
**********************************/
/*
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
*/

/***********************************
***  Arrow functions 2
**********************************/
/*
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
*/
/*
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
*/
/*
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends)
  {
    var arr = friends.map(function(el)
     {
        return this.name + ' is friends with ' + el;                     
     }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

// ES6 
Person.prototype.myFriends6 = function(friends)
  {
    const arr = friends.map(el => `${this.name} is friends with ${el}` );
    console.log(arr);
  }

var friends = ['Bob', 'Mary', 'Mike'];

new Person('John').myFriends6(friends);

*/


/***********************************
***  Destructuring
**********************************/
/*
// ES5
var john = ['john', 26];
// var name = john[0];
//var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);


const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1998);
console.log(age2);
console.log(retirement);
*/


/***********************************
***  Arrays
**********************************/

/*
const boxes = document.querySelectorAll('.box');
*/
//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
   cur.style.backgroundColor = 'dodgerblue'; 
});
*/

//ES6
/*
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

//ES5
/*
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        break;
    }
    boxesArr5[i].textContent = 'I changed to blue';
}
*/
/*
// ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue'))
        {
            continue;
        }
    cur.textContent = 'I changed to blue';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
   return cur >= 18; 
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/***********************************
***  Spread Operator
**********************************/
/*

function addFourAges (a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 23);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 23];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const bigFamily2 = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily2);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

// convert nodelist to array and change color
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/



/***********************************
***  Rest Parameters
**********************************/
/*

// ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur){
       console.log((2019 - cur) >= 18); 
    });
}

// isFullAge5(1990, 1997, 1980);
// isFullAge5(1990, 1997, 1980, 1948, 2016);

//ES6
function isFullAge6(...years){
  //console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1997, 2006, 1980);
*/

/*

// ES5
// first value as limit arugment
function isFullAge5(limit){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);
    argsArr.forEach(function(cur){
       console.log((2019 - cur) >= limit); 
    });
}

isFullAge5(21, 1990, 1997, 2006, 1980);


//ES6
// first value as limit arugment
function isFullAge6(limit, ...years){
  //console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= limit));
}

isFullAge6(21, 1990, 1997, 2006, 1980);
*/


/***********************************
***  Default Parameters
**********************************/
/*
//ES5
function SmithPerson(firstName,yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'british' : nationality = nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1997);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);
*/

/*
//ES6 
function SmithPerson(firstName,yearOfBirth, lastName = 'Smith', nationality = 'british'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1997);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);
*/


/***********************************
***  Maps
**********************************/
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');


console.log(question);
console.log(question.get('question'));
console.log(question.size);

if(question.has(4)){
  //  question.delete(4);
    console.log('Answer 4 is here');
}
*/
//console.log(question);

//question.clear();
//console.log(question);

// question.forEach((value, key) => console.log(`this is ${key}, and it's set to ${value}`));
/*
for(let[key, value] of question.entries()){
   console.log(`this is ${key}, and it's set to ${value}`);   
}

console.log(question.get('question'));

for(let[key, value] of question.entries()){
   
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`); 
    }     
}

const ans = parseInt(prompt('Write the correct answer'));

 console.log(question.get(ans === question.get('correct')));
*/



/***********************************
***  Classes
**********************************/

/*
//ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1998, 'teacher');



//ES6
class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting(){
        console.log('Hey there');
    }
}

const mike6 = new Person6('Mike', 1997, 'developer');
mike6.calculateAge();

Person6.greeting();

*/


/***********************************
***  Sub Classes
**********************************/

//ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var johnAthlete5 = new Athlete5('John', 1980, 'swimmer', 3, 10);

console.log(johnAthlete5);

johnAthlete5.calculateAge();














