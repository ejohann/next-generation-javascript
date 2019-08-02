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
function driversLicense(passedTest){
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1998;
        
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }
}

driversLicense(true);