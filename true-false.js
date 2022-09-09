/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {} object is truthy
6. [] array is truthy
7. 

Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined, null
*/

let x = [5, 6];
console.log(x);
if(x){
  console.log('value of x is truthy')
}
else{
  console.log('value of x is falsy')
}

// optional
// check falsy
const y = null;
if (!y){
  console.log('value is falsy')
}

const z = ' ';
// check truthy
if(!!z){
  console.log('value is truthy')
}