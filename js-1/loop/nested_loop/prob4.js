// there is duo of father and son they have 5 farm in each farm have to 1 to 5 seed

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

// for (let farm = 1; farm <= 5; farm++) {
//  let bag = ""
// //  console.log("farm no is", farm)

//   for (let seed = 1; seed<= farm; seed++) {
//      bag = bag+" "+"*"
//   }
// console.log(bag)
// }


for (let i = 5; i >=1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + " " + "*";
  }
  console.log(row);
}

