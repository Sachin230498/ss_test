// Superman: He is planning to add two number and give the asnwer to batman

// Batman : Batman is planning to take the superman's answer and square it, then give it to shaktiman

// Shaktiman : He will just substract 50 from it and give the answer to villian


function superman(a,b){
    let add = a+b;
    return add;
}


function batman(x){
    let square = x**2;
    return square
}

function shaktiman(y){
    let diff = y-50;
    return diff
}


let step1 =  superman(5,6)
// console.log(step1)

let step2 =  batman(step1)
// console.log(step2)

let villian = shaktiman(step2)

// console.log(step3)

console.log("I am sparing your lives", villian)