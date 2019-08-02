// let and const

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