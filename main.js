class Alumnos {
    constructor() {
        this.lista = []
        this.cargarAlumnosJSON()
        
        this.lista = this.cargarDesdeLocalStorage()
    }
    agregarAlumno(nombre) {
        this.lista.push(nombre)
        this.actualizarJSON()
        
        this.actualizarLocalStorage()
    }
    cargarAlumnosJSON() {
        fetch('alumnosAPI.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.lista = data
            })
    }

    actualizarJSON() {
    }
    
    cargarDesdeLocalStorage() {
        const listaGuardada = localStorage.getItem('alumnos')
        return listaGuardada ? JSON.parse(listaGuardada) : null
    }
    actualizarLocalStorage() {
        localStorage.setItem('alumnos', JSON.stringify(this.lista))
    }
    calcularPromedio(nombre, nota1, nota2, nota3) {
        const promedio = (nota1 + nota2 + nota3) / 3
        return {
            nombre,
            promedio,
        }
    }
    obtenerLista() {
        return this.lista

    }
}

const alumnos = new Alumnos()

const btn_nuevo = document.getElementById("btn_nuevo")
btn_nuevo.addEventListener("click", () => {
    Swal.fire({
        title: "<h2>Ingrese su nombre en minúsculas para añadirlo a los alumnos</h2>",
        html: `<input type="text" id="new_nombre" class="swal2-input" placeholder="Nombre">`,
        confirmButtonText: 'Ingresar',
        focusConfirm: false,
        preConfirm: () => {
            const new_nombre = Swal.getPopup().querySelector('#new_nombre').value
            if (!new_nombre) {
                Swal.showValidationMessage('Inserte un nombre')
            }
            return { new_nombre }
        }
    }).then((result) => {
        const nombre = result.value.new_nombre
        alumnos.agregarAlumno(nombre)

        Swal.fire(`Bienvenid@: ${nombre}`)
    })
})

const btn_notas = document.getElementById("btn_notas")
btn_notas.addEventListener("click", () => {
    Swal.fire({
        title: "<h2>Ingrese nombre del alumno en minúsculas</h2>",
        html: `<input type="text" id="new_nombre" class="swal2-input" placeholder="Nombre">
             <input type="number" id="new_nota1" class="swal2-input" placeholder="0-10">
             <input type="number" id="new_nota2" class="swal2-input" placeholder="0-10">
             <input type="number" id="new_nota3" class="swal2-input" placeholder="0-10">`,
        confirmButtonText: 'Promedio',
        focusConfirm: false,
        preConfirm: () => {
            const new_nombre = Swal.getPopup().querySelector('#new_nombre').value
            const new_nota1 = parseFloat(Swal.getPopup().querySelector('#new_nota1').value)
            const new_nota2 = parseFloat(Swal.getPopup().querySelector('#new_nota2').value)
            const new_nota3 = parseFloat(Swal.getPopup().querySelector('#new_nota3').value)
            if (!new_nombre || isNaN(new_nota1) || isNaN(new_nota2) || isNaN(new_nota3)) {
                Swal.showValidationMessage('Inserte su nombre y sus notas')
            }
            return { new_nombre, new_nota1, new_nota2, new_nota3 }
        }
    }).then((result) => {
        const { new_nombre, new_nota1, new_nota2, new_nota3 } = result.value
        const promedio = alumnos.calcularPromedio(new_nombre, new_nota1, new_nota2, new_nota3)

        Swal.fire(`Nombre: ${promedio.nombre}\nPromedio: ${promedio.promedio}`)
    })
})

const btn_alumnos = document.getElementById("btn_alumnos")
btn_alumnos.addEventListener("click", () => {
    const listaAlumnos = alumnos.obtenerLista().join(". \n")
    Swal.fire(listaAlumnos)
})