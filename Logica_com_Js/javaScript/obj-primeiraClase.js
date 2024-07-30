function fn(cb){
    console.log("Função CallBack")
    console.log(typeof(cb))
    cb()
}


fn(function (){
    console.log("Função passada por parametro")
}
)