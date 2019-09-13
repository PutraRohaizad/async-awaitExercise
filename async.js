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
function A(){
    setTimeout( async () => {
        let error = false;
            if(!error){
                await console.log('Good')
            }
            else{
                await console.log('Error')
            }
            },500)
    }

    async function C() {
        await console.log('nahhh')
}

A();
C();

////////////////////////////////////////////

// Exercise 2
// const workers =[
// {name:'Ali', position: 'HR'},
// {name:'Abu', position: 'IT'}
// ]

// function B(){

// return new Promise ((resolve,reject) =>{

// let error = false;

// if(!error){
//     resolve();
// }
// else{
//     reject('Error');
// }
// });
// }

// function info(){
// setTimeout(() =>{
// for(var i in workers){
//     var abc = workers[i].name
//     var xyz = workers[i].position
//     console.log(abc);
//     console.log(xyz);
// }
// }, 700)
// }

// B()
// .then(info)
// .catch(err => console.log(err));