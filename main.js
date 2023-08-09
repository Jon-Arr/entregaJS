//
let op = ""
let numA = ""
let numB = ""

function operacion() {

    alert("Bienvenido, a continuacion podra realizar operaciones matematicas basicas")
    let op = prompt("Desea: (s)sumar - (r)restar - (m)multiplicar - (d)dividir")

    if (op == "s" || op == "r" || op == "m" || op == "d") {

        let numA = Number(prompt("Ingrese un numero"))
        let numB = Number(prompt("Ingrese otro numero"))

        if (numA == "" || numB == "" || numA == undefined || numB == undefined) {
            alert("No ingreso ningun numero")
            operacion(op, numA, numB)
        }
        else {

            switch (op) {
                case "s":
                    res = numA + numB
                    alert("El resultado es: "+res)
                    break;

                case "r":
                    res = numA - numB
                    alert("El resultado es: "+res)
                    break;

                case "m":
                    res = numA * numB
                    alert("El resultado es: "+res)
                    break;

                case "d":
                    res = numA / numB
                    alert("El resultado es: "+res)
                    break;

                default:
                    alert("Error en el ingreso de datos")
                    break;
            }
        }

    }
    else if(op == undefined){
        alert("No ingreso una operacion")
        operacion(op, numA, numB)
    }
    else {
        alert("Ingrese una opcion valida")
        operacion(op, numA, numB)
    }
}

operacion(op, numA, numB)