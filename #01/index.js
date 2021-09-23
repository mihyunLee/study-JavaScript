// #1-7. variables
// const a = 250;
// let b = a - 5;
// //a = 4;
// console.log(b, a);


// #1-8. Data Type
//String
// const what = "Mihyun";
// const emoji = "😉";

// console.log(what);
// console.log(emoji);

//Boolean
// const wat1 = true; //true: 1, false: 0
// console.log(wat1);

//Number
// const wat2 = 666;
// console.log(wat2);

//Float
// const wat3 = 3.14;
// console.log(wat3);

// #1-9. Organizing Data with Arrays
//Array
const something = "Something"
const daysOfWeek = [ "Mon", "Tue", "Wed", 
"Thu", "Fri", "Sat", "Sun", 36, true, something];

console.log(daysOfWeek[9]);

// #1-10. Organizing Data with Objects
//Object
const info = {
    name: "Mihyun",
    age: "23",
    gender: "Female",
    isBeauty: true,
    nation: "Korea",
    favMovies: ["The Greates Showman", "Mamma Mia" ],
    favFood: [
        {
            name: "Kimchi",
            fatty:false
        },
        {
            name: "Cheese burger",
            fatty: true
        }
    ]
};

console.log(info);

console.log(info.favFood[1].name);

