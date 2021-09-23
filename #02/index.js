// #2.1 function
// function sayHello(name, age){
//     console.log("Hello!", name, "you have", age, "years of age.");
//     console.log(`Hello ${name} you are ${age} years old`);
// }

// sayHello("Mihyun", 20);

// function sayHello(name, age){
//     return `Hello ${name} you are ${age} years old`;
// }

// const greetMan = sayHello("Mihyun", 20);
// console.log(greetMan);

// const calculrator = {
//     plus: function(a, b){
//         return a + b;
//     },
//     minus: function(a, b){
//         return a - b;
//     },
//     multi: function(a, b){
//         return a * b;
//     },
//     division: function(a, b){
//         return a / b;
//     },
//     expo: function(a, b){
//         return a**b;
//     }
// };

// const result1 = calculrator.plus(5, 5);
// const result2 = calculrator.minus(7, 5);
// const result3 = calculrator.multi(6, 3);
// const result4 = calculrator.division(18, 2);
// const result5 = calculrator.expo(2, 3);
// console.log(result1, result2, result3, result4, result5);

// # 2.2 Dom Function
// const title = document.getElementById('title');
// title.innerHTML = "Hi! From JS!";
// console.log(title);

// # 2.3 Modifying the DOM with JS
//const title = document.getElementById('title');
// const title = document.querySelector('#title');
// title.innerHTML = "Hi! From JS!";
// title.style.color = 'red';
// document.title = 'I won you now'

// console.dir(document);

//# 2.4 Events and event handlers

// function handleResize(event){
//     //console.log("I have been resiezed");
//     console.log(event);
// }

//window.addEventListener("resize", handleResize);

// const title = document.querySelector('#title');

// function handleClick(){
//     title.style.color = 'blue';
// }

// title.addEventListener("click", handleClick);

//# 2.5 if, else, and, or
// if(10 === '10'){
//     console.log("hi")
// } else if('10' === '10'){
//     console.log('ho')
// } else{
//     console.log('yaho~')
// }

// if(20 > 5 && "hi" === "hi"){
//     console.log("yes!")
// } else {
//     console.log('nono')
// }

// const age = prompt("How old are you"); //old javascript
// console.log(age)

// if(age >= 19 && age <= 21) {
//     console.log('you can drink but you should not');
// }else if(age > 21){
//     console.log('go ahead');
// }else{
//     console.log('you cant');
// }

//# 2.6 DOM if else Function practice
// const title = document.querySelector('#title')

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#e74c3c";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// }

// //Application Initionalize
// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click",handleClick);
// }
// init();

//# 2.7 DOM if else Function practice part.2
const title = document.querySelector('#title')

const CLICKED_CLASS = "clicked";

// function handleClick(){
//     //const currentClass = title.className;
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     //if(currentClass !== CLICKED_CLASS)
//     if(hasClass){
//         //title.className = CLICKED_CLASS;
//         title.classList.remove(CLICKED_CLASS);
        
//     }else{
//         //title.className = "";
//         title.classList.add(CLICKED_CLASS);
//     }
// }
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}


//Application Initionalize
function init(){
    title.addEventListener("click",handleClick);
}
init();

