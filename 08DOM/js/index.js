/* 
Desarrollador: Luis Liquin
Fecha: 12/07/2022
Entregable Integral
*/


//Declaracion de variables
let ordenadosAscendientes = [];
let ordenadosDescendiente = [];

let bebidas, list,    nombreApellido, dni,
    tarjeta, codseg,  cliente, li

//Carga de datos
while (ingresar !== "END") {
    let ingresar = prompt(
    `Cerveceria "los andinos"!
    Recuerde que los productos tienen 20% de iva
    seleccione el Id de los siguientes productos:
    id: ${Bebidas[0].id} ${Bebidas[0].nombre} ${Bebidas[0].marca} $ ${Bebidas[0].valor},
    id: ${Bebidas[1].id} ${Bebidas[1].nombre} ${Bebidas[1].marca} $ ${Bebidas[1].valor},
    id: ${Bebidas[2].id} ${Bebidas[2].nombre} ${Bebidas[2].marca} $ ${Bebidas[2].valor},
    id: ${Bebidas[3].id} ${Bebidas[3].nombre} ${Bebidas[3].marca} $ ${Bebidas[3].valor},
    id: ${Bebidas[4].id} ${Bebidas[4].nombre} ${Bebidas[4].marca} $ ${Bebidas[4].valor},
    id: ${Bebidas[5].id} ${Bebidas[5].nombre} ${Bebidas[5].marca} $ ${Bebidas[5].valor},
    END para finalizar!`);

    if (ingresar >= 0 && ingresar <= 5) {
        alert(`usted selecciono el producto ${Bebidas[ingresar].nombre} cuyo valor es ${Bebidas[ingresar].valor}`)
        console.log(ingresar)
        acumulado = acumulado + Bebidas[ingresar].valor;
        console.log(acumulado);
        alert(`el valor acumulado es ${acumulado}`);
        alert(`total de valor de la compra ${iva(acumulado)}`);
        console.log(iva(acumulado));
    } else if (ingresar === "END") {
        alert("gracias por su compra!")
        acumulado = 0;
        window.location.reload();
    }
    else {
        alert("ingrese un numero valido");
    }
}

//Orden Ascendiente
ordenadosAscendientes = Bebidas.map(elemento => elemento);
ordenadosAscendientes.sort(function(a,b) { 
    return a.valor - b.valor});

//Orden descendiente
ordenadosDescendiente = Bebidas.map(elemento => elemento);
ordenadosDescendiente.sort(function(a,b) { 
    return b.valor - a.valor});

bebidas = document.getElementById("productos");
for (const bebi of Bebidas){
    list = document.createElement("li");
    list.innerHTML = 
    `<h3>ID:${bebi.id}</h3>
    <p>desc: ${bebi.nombre}</p>
    <p>marca: ${bebi.marca}</p>
    <h3> $ ${bebi.valor}</h3>`;
    bebidas.append(list);
}

nombreApellido = prompt("Intruduzca Apellido!");
dni = prompt("Intruduzca dni!");
tarjetaNum = prompt("Intruduzca n?? tarjeta!");
codSeg = prompt("codigo de seg");

persona.push = new Clientes(nombreApellido,dni,tarjetaNum,codSeg);
cliente = document.getElementById("cliente");
li = document.createElement("li");
li.innerHTML = `<H3> Datos del Comprador: </H3><br>
                <p><b> Cliente: ${nombreApellido} </b></p>
                <p><b> dni: ${dni}<b> </p>
                <p> Tarjeta de cred: ${tarjetaNum}</p>`;
cliente.append(li);