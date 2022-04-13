const generarAlumno = require('./funciones')
const guardarAlumnos = require('./baseDatosAlumnos')
//generar un alumno: nombre, apellido, email
let alumno = generarAlumno('pepe','lopez','pepe@lopez.com')


//comprobar que los datos del alumno son correctos
if ((typeof alumno.nombre) != "string" || alumno.nombre.length < 2 ) {
    console.log('El nombre del alumno es invalido')
}

//guardar el alumno en la bd
let alumnos = []

guardarAlumnos(alumno, alumnos)

alumno = generarAlumno('luisa', 'perez', 'luisa.perez@gmail.com')

guardarAlumnos(alumno, alumnos)

console.log(alumnos)
