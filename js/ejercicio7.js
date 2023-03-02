let num1 = parseInt(prompt("ingrese un numero: "))
let num2 = parseInt(prompt("ingrese un numero: "))
let num3 = parseInt(prompt("ingrese un numero: "))
let numeroMayor

if(num1 >= num2 && num1 >= num3){
    numeroMayor = num1
}else if(num2 >= num1 && num2 >= num3){
    numeroMayor = num2
}else if (num3 >= num2 && num3 >= num1){
    numeroMayor = num3
}else{
    document.write("no se pudo realizar la operacion")
}
document.write("el mayor fue :" + numeroMayor)