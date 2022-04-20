let numero
let suma

// Algoritmo para sacar el promedio de 5 numeros pedidos al usuario

    do{
        numero1 = parseInt(prompt("Ingrese un numero para obtener el promedio de 5 numeros"))
        numero2 = parseInt(prompt("Ingrese un numero para obtener el promedio de 5 numeros"))
        numero3 = parseInt(prompt("Ingrese un numero para obtener el promedio de 5 numeros"))
        numero4 = parseInt(prompt("Ingrese un numero para obtener el promedio de 5 numeros"))
        numero5 = parseInt(prompt("Ingrese un numero para obtener el promedio de 5 numeros"))
        console.log(numero1)
        console.log(numero2)
        console.log(numero3)
        console.log(numero4)
        console.log(numero5)
        if(isNaN (numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4) || isNaN(numero5)){
            alert("Comando incorrecto")
        }
   
       }while (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4) || isNaN(numero5)) 
       suma = numero1+numero2+numero3+numero4+numero5
       console.log (suma/5)
