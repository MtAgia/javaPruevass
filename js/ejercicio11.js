let num = prompt("escribe un número");
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
  if (num % 2 === 0) {
    document.write("es divisible por 2");
  }
    else if (num % 3 === 0) {
    document.write("es divisible por 3");
  }
        else if (num % 5 === 0) {
    document.write("es divisible por 5");
  }
            else if (num % 7 === 0) {
    document.write("es divisible por 7");
  }
} 
                else {
  document.write("el numero no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
