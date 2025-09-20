// Scope

// global, local, block

// Scope is js, define the accessibility and visibility of varibles, function and object


let a = 50;  //global scope

function greet(){
    let x = "hello"  // local scope, function scope
    // console.log(x)

    if(x=="hello"){
        let y = 50;  // block scope
        // console.log(y)
    }

    // console.log(y)

}

let x = "bye"
console.log(x)

greet()
