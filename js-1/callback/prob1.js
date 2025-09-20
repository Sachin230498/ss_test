//  A callback is a function passed as a argument to another function

// function add(a,b,c){
//     console.log(a+b)
//     c()
// }

// function bye(){
//     console.log("bye")
// }

// add(10,2,bye)



// function greetUser(name,callback){
//     console.log("Hello "+ name)
//     callback()
// }

// function sayBye(){
//     console.log("good bye")
// }

// greetUser("Sachin",sayBye)


// function greetUser(x,name){
//     console.log(x)
//     name();
// }

// function add(){
//     console.log("hello")
// }

// greetUser("Shubham",add)



function add(a,b){
     console.log(a)
     b();
}

// function sub(){
//     console.log(5)
// }


// add(10,function(){
//     console.log("hello")
// })

