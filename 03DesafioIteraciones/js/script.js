/* 
Desarrollador: Luis Liquin
Fecha: 25/06/2022
Entregable Nro 1
*/

//Declaracion e inicializacion de variables
let cantAlum,     califAlum, 
    totCalif = 0, promCalif = 0, numbCalif = 0;

//Mensajes de alerta
const mensNroErr = `Por favor ingrese un nro, no letras.`;
const mensVacio  = "Has introducido el valor vacío";
const mensAlert  = `El valor promedio de los alumnos es `;

//In2icio de la aplicacion
cantAlum = prompt(`Ingrese la cantidad de alumnos`);

if (cantAlum == null || cantAlum == "") {
    alert(`${mensVacio}`);
    window.location.reload();
}else if(isNaN(cantAlum)){
    alert(`${mensNroErr}`);
    window.location.reload();
}

//solicito las notas de los alumnos
for (let i = 1; i <= cantAlum; i++) {
    califAlum = prompt(`Por favor ingrese el valor del alumno ${i}`);

    if (califAlum == null || califAlum == "") {
        alert(`${mensVacio}`)
        //i--;
    }else if(isNaN(califAlum)){
        alert(`${mensNroErr}`);
        //i--;
    }else{
        numbCalif = parseFloat(califAlum)
        totCalif = totCalif + numbCalif;        
    }
}

//calculo del promedio
promCalif = totCalif / cantAlum; 

//output del resultado con su interpretacion
    alert(`la nota de los alumnos es ${promCalif}`)
    window.location.reload();