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

const title = document.querySelector('#title');

function handleClick(){
    title.style.color = 'blue';
}

title.addEventListener("click", handleClick);
