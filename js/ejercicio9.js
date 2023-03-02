let frase = prompt("escriba una frase");
let longitud = frase.length;

for (let i=0; i < longitud; i++) {
    if(frase.substring(i,1) === "a" ||
    frase.substring(i,1) === "e" || frase.substring(i,1) === "i" ||
    frase.substring(i,1) === "o" || frase.substring(i,1) === "u"){
        document.write(frase.substring(i,1))
//preguntat sobre este ejercicio
    }
    
}