let num = prompt("Escribe un número");
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
document.write("el numero es divisible por 2, 3, 5 o 7");
} else {
document.write("el numero no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}