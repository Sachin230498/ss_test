// object

//  let name = ["Rahul","Priya", "Aman"];

// console.log(name[2])
// let marks = [88,85,82];

// key value pair

// let obj = {
//     key :value,
//     key :value
// }

let Rahul_data = {
  name: "Rahul",
  address: "Indore",
  marks: { eng: 88, maths: 82, phy: 92 },
  hobbies: ["biking", "gardening"],
};

// how to access
// bracket notaion

// let a = Rahul_data["marks"]["maths"]

// let b  = Rahul_data["hobbies"][1]

// console.log(b)

// dot notation

// let x = Rahul_data.marks.eng

// console.log(x)

// no concept of length
// no index

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

// obj.d = 4
// obj.a = 44

// console.log(obj)

let x = {
  name: "Aman",
  age: 26,
  Location: "Delhi",
};

// for in

// it only work with bracket notation

for(let key in x){
    console.log(x[key])
}
