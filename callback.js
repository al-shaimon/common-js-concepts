function greeting(greetingHandler, name){
  greetingHandler(name);
}

// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}

function greetingHandler(name){
  console.log('Good Morning', name);
}

function greeEvening(name){
  console.log('Good Evening', name);
}

function greeNight(name){
  console.log('Good Night', name)
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greeEvening, 'Tom Solaiman')
greeting(greeEvening, 'Tom Salman')
greeting(greeNight, 'Rasel')

function submitHandler(){
  console.log('Submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)

// Quiz
// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q); 

// const isTrue='false'; 
// if(!isTrue){
// console.log('hello');
// } else {
// console.log('world'); 
// }

// function sum(p, q) {
//   p + q;
//  }
//  const result = sum(2, 3);
//  console.log(result);

// if ("2" === 2) {
//   console.log("Inside if");
//  } else {
//   console.log("Inside else");
//  }
 
// function work(x, y = 4) {
//   return x + y;
//  }
//  console.log(work(32);