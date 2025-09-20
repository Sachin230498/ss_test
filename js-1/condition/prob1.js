// condition statement

// if
// if else
// if else if else

// syntext if(condition){ code  }

// if(5>4){
//     console.log("Correct")
// }

// let name = "Rahul"

// if(name == "Rahul"){
//     console.log(name)
// }

// if(false){
//     console.log("Hello")
// }

// if else

// if(false){
//     console.log("hello")
// }else {
//     console.log("Bye")
// }

// if(5==4){
//     console.log("Correct")
// }else{
//     console.log("Not correct")
// }

let DBusername = "Devanshi@12";
let DBpassword = "D1234";

let input_username = "Devanshi@12";
let input_password = "D123";

// if(input_username == DBusername && input_password == DBpassword){
//     console.log("Login")
// }else{
//     console.log("Login Failed")
// }

// if(input_username == DBusername){
//     if(input_password == DBpassword){
//         console.log("login")
//     }else{
//         console.log("Wrong Password")
//     }
// }else{
//     console.log("login failed")
// }

input_username == DBusername
  ? input_password == DBpassword
    ? console.log("login")
    : console.log("wrong password")
  : console.log("login failed");
