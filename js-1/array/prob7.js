// find the avg of all the number that is bigger then  8

let arr = [1,2,10,17,8,6,12,15,13,20,18]

let sum = 0;
let count = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>8){
    // console.log(arr[i])
    sum = sum +arr[i]
    count++;
    }
}

console.log(sum/count)
// console.log(count)
// 1,2,3,4,5  sum/no of el

