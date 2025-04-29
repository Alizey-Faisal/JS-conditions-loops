// const toggleButton = document.getElementById('dark');

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

let arr = [1,2,3,4,5,6,7,8,9]
let newArr = arr.filter((item) => item %2 == 0);
console.log(newArr)
let Arr = arr.filter((item) => item %2 );
console.log(Arr)

// synchronous

// console.log("hello")
// console.log("hi")
// console.log("how r u")                         
// console.log("world")
// console.log("jang honay wali hy")

// asynchronous

console.log("hello")
setTimeout(() => {
    console.log("world")
    console.log("jang honay wali hy")
}, 2000);
console.log("hi")
console.log("how r u") 
console.log("bye")                        
