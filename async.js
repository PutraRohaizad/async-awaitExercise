const fetch = require("node-fetch");


// Exercise 1
// function result(){
//     setTimeout( async() => {
//         let z = 'Ok'; 
//         await console.log(z)
//     }, 5000)
// };
// result();

////////////////////////////////////////////

// Exercise 2
// function A(){
//     setTimeout( () => {
//         let error = false;
//             if(!error){
//                  console.log('Good')
//             }
//             else{
//                  console.log('Error')
//             }
//             },500)
//     }

//     function B(){
//         setTimeout(() => {
//             console.log('nahhh')
//         }, 300)
//     }

//     async function C() {
//         await B();
//         A();
// }

// C();

////////////////////////////////////////////

// Exercise 3 Fetch Api

async function fetchUser() {

const res = await fetch('https://jsonplaceholder.typicode.com/users');

const data = await res.json();

    console.log(data);
}

fetchUser();