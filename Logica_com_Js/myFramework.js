function calcularMedia(){
    var total = 0;
    var divisao = arguments.length; 
    var x = 0;

    while(arguments[x]){
        total += arguments[x];
        x++
    }

    return total / divisao;

}