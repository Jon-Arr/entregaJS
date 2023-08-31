const alumnos = ["jonathan", "barbara"]

function promedio() {
    let bienvenida = prompt("Bienvenid@, ingrese 'nuevo' si desea ingresar un nuevo alumno, 'notas' para insertar las notas y obtener su promedio o 'alumnos' para ver la lista de alumnos:")

    if (bienvenida == "nuevo") {
        let nuevo = prompt("Igrese su nombre en minusculas para añadirlo a los alumnos o escriba 'esc' para volver al menu")
        if (nuevo == "esc") {
            alert("Volviendo al menu principal")
            promedio()
        }
        else if (nuevo == "" || nuevo == undefined) {
            alert("No ingreso un dato valido o esta vacio")
            promedio()
        }
        else {
            alumnos.push(nuevo)
            alert("Alumno insertado correctamente")
            promedio()
        }
    }
    else if (bienvenida == "notas") {

        function notas() {

            let nombre = prompt("Ingrese nombre del alumno en minusculas o escriba 'esc' para volver al menu")
            let compNombre = alumnos.some((el) => el == nombre)

            if (nombre == "esc") {
                alert("Volviendo al menu principal")
                promedio()
            }
            else if (nombre == "" || nombre == undefined || compNombre == false) {
                alert("No ingreso un dato valido o Usuario no encontrado")
                notas()
            }
            else {
                alert("Bienvenid@, " + nombre)
                const listaNotas = []
                let sumaNotas = 0

                let primerNota = Number(prompt("Ingrese nota 1 de 5"))
                listaNotas.push(primerNota)
                let segundaNota = Number(prompt("Ingrese nota 2 de 5"))
                listaNotas.push(segundaNota)
                let tercerNota = Number(prompt("Ingrese nota 3 de 5"))
                listaNotas.push(tercerNota)
                let cuartaNota = Number(prompt("Ingrese nota 4 de 5"))
                listaNotas.push(cuartaNota)
                let quintaNota = Number(prompt("Ingrese nota 5 de 5"))
                listaNotas.push(quintaNota)

                sumaNotas = listaNotas.reduce((a, b) => a + b, 0)
                sumaNotas = sumaNotas / listaNotas.length
                alert(nombre + " su promedio de notas es: " + sumaNotas)
            }
        }
        notas()

    }
    else if (bienvenida == "alumnos") {
        let contAlumnos = ""

        for (i = 0; i < alumnos.length; i++) {
            contAlumnos = "Alumno - " + alumnos[i] + ". \n" + contAlumnos
        }
        alert(contAlumnos)
        promedio()
    }
    else if (bienvenida == "" | bienvenida == undefined) {
        alert("No se ingreso informacion")
        promedio()
    }
    else {
        alert("Ingrese la informacion solicitada")
        promedio()
    }

    promedio()

}
promedio()