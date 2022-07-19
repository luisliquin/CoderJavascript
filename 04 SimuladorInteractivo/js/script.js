/* 
Desarrollador: Luis Liquin
Fecha: 25/06/2022
Entregable Nro 2
*/


//Declaracion e inicializacion de variables
let cantAlum,     califAlum,     calif=[],
    totCalif = 0, promCalif = 0, numbCalif = 0,
    califMax = 0, califMin = 0;

//Mensajes de alerta
const mensNroErr = `Por favor ingrese un nro, no letras.`;
const mensVacio  = "Has introducido el valor vacío";
const mensAlert  = `El valor promedio de los alumnos es `;

//Funciones
const NotaMax = function(array){
    return Math.max.apply(Math, array);
}

const NotaMin = function(array){
    return Math.min.apply(Math, array);
}

//In2icio de la aplicacion
cantAlum = prompt(`Ingrese la cantidad de alumnos`);

//
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
    }else if(isNaN(califAlum)){
        alert(`${mensNroErr}`);
    }else{
        numbCalif = parseFloat(califAlum)
        calif.push(numbCalif);
        totCalif = totCalif + numbCalif;        
    }
}

//Resultados
promCalif = totCalif / cantAlum; 
califMin =  NotaMin(calif);
califMax =  NotaMax(calif);


//output del resultado con su interpretacion
alert(`la nota promedio de los alumnos es ${promCalif}`);
alert(`la nota mas alta es ${califMax}`);
alert(`la nota mas baja es ${califMin}`);
window.location.reload();