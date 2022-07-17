/* 
Desarrollador: Luis Liquin
Fecha: 12/07/2022
Entregable Integral
*/

const alumnos = [
    {
    id:0,
    nombre: 'Luis', 
    nota: 8
    },
    {
    id:1,
    nombre: 'Exequiel', 
    nota: 7
    },
    {
    id:2,
    nombre: 'Nicolas', 
    nota: 6
    },
    {
    id:3,
    nombre: 'Cristian', 
    nota: 7
    },
    {
    id:4,
    nombre: 'Matias', 
    nota: 4
    },
    {
    id:5,
    nombre: 'Fernando', 
    nota: 9
    },
    {
    id:6,
    nombre: 'Martin', 
    nota: 3
    },
    {
    id:6,
    nombre: 'Claudio', 
    nota: 10
    }
];

const aprobado = a => (a > 6) ?'Aprobado':'Desaprobado';

const app = document.getElementById('app');

const lis = alumnos.map(alumno => {
    return `<li>${alumno.nombre} - ${alumno.nota} ${aprobado(alumno.nota)} </li>`
})

app.innerHTML = lis.join(' ')