// print all the even no from 1 to 100
let sum = 0;
for(let i=1; i<=100; i++){
    // console.log(i)
    if(i%2==0){
        // console.log(i)
        sum = sum + i;
    }
  
}

  console.log(sum);



//  s = 0, i=1 , 1<=100 , 1++ , 1%2==0 
//  s = 0, i=2 , 2<=100 , 2++ , 2%2==0 , s = 0 + 2 , s=2 
//  s = 2, i=3 , 3<=100 , 3++ , 3%2==0 , 
//  s = 2, i=4 , 4<=100 , 4++ , 4%2==0 , s = 2+4 , s =6 