function fn(cb){
    console.log("Função original")

    typeof cb === "function" && cb()
    
}

function callback(){
    console.log("Função passada por parâmetro")
}

fn(callback)

console.log("---------------------------------------------------------------------")

function fn1(n1){
    console.log(n1)
    return function fn2(n2) {
        console.log(n2)
        return n1 * n2
    }
}

const funcao2 = fn1(10) 
const mult = funcao2(2)

console.log(mult)
