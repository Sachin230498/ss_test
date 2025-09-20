// make pizza

function makeDough(callback){
    console.log("🍞 Dough is ready")
    callback()
}

function addSauce(callback){
    console.log("🫙 Sauce added")
    callback()
}

function addCheese(callback){
    console.log("🧀 cheese added")
    callback()
}

function bakePizza(callback){
    console.log("🔥 Pizza Backed")
    callback()
}


makeDough(function(){
    addSauce(function(){
        addCheese(function(){
            bakePizza(function(){
                    console.log("Pizza is ready")
                 
            })
        })
    })
})