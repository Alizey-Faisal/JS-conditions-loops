// let user = prompt("enter the table number")
// let start = prompt("enter the starting number")
// let end = prompt("enter the ending number")

// for (let i = start;i <= end; i++){
// console.log(`${user} * ${i} = ${user*i}`);
// }

// =======ternary operator|condition===========

// let age = 28
// console.log(age >= 18? "true":"false");

// =================Array===================

// let fruits = ["leechi","banana","melon","kiwi","chikoo","gooseberry","apple"]
// console.log(fruits)

// ==============array of objects===========

// let student = [
//     {name:"lizey",
//     age:18,
//     city:"karachi",
// },
//     {name:"mimi",
//     age:25,
//     city:"islamabad",
// },
//     {name:"anya",
//     age:5,
//     city:"muree",}
// ]
// console.log(student[0])
// for(let i = 0 ; i < student.length ; i++){
//     console.log(student[i].name)
// }

// =============function==========

// function greetings () {
//     console.log("good night");
//     console.log("sweet dreams");
// }
// greetings()

// ==========parameterized function==========

// function greetings (name){
//     console.log("hello " + name );
//     console.log("gwenchana?");
// }
// greetings("ammar");
// greetings("mimi");
// greetings("unzi");

// const addNum = (a ,b) => {
//     console.log(a + b);
// };
// addNum(5,10);
// addNum(6,2);

// ===================DOM=========================

console.log(document)
console.log(document.body.style.backgroundColor = "pink")


let heading = document.getElementsByTagName("h1")
console.log(heading)
heading[0].style.background = "red";
heading[1].style.background = "blue";
