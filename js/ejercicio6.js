let num1 = prompt("ponga numero para comparar");
let num2 = parseInt(num1);
let num3 = prompt("ponga otro numero para comparar");
let num4 = parseInt(num3);

if(num2 > num4){
    document.write("el numero " + num2 + " fue mayor que " + num4)
}else{
    document.write("el numero " + num4 + " fue mayor que " + num2)
}
