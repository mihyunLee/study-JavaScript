// #2.1 function
// function sayHello(name, age){
//     console.log("Hello!", name, "you have", age, "years of age.");
//     console.log(`Hello ${name} you are ${age} years old`);
// }

// sayHello("Mihyun", 20);

function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetMan = sayHello("Mihyun", 20);
console.log(greetMan);

const calculrator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multi: function(a, b){
        return a * b;
    },
    division: function(a, b){
        return a / b;
    },
    expo: function(a, b){
        return a**b;
    }
};

const result1 = calculrator.plus(5, 5);
const result2 = calculrator.minus(7, 5);
const result3 = calculrator.multi(6, 3);
const result4 = calculrator.division(18, 2);
const result5 = calculrator.expo(2, 3);
console.log(result1, result2, result3, result4, result5);

