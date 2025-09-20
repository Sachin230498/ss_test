let product = ["Back Case", "Earphones", "Data Cables", "Game PAd", "Charger"]

let search = "Buds";
let isPresent;

for(let i=0;i<product.length;i++){
    // console.log(product[i])
    if(product[i]==search){
        isPresent = search
        break;
    }else{
        isPresent = null
    }
}


if(isPresent == null){
    console.log("Not Found")
}else{
    console.log(isPresent, "Found")
}

