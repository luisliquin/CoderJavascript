
//! interactivo venta de prod
while (ingresar !== "END") {
    ingresar = prompt(
        `Bienvenidos al Mundo!👨🏼‍🍼
   seleccione el Id de los siguientes productos:
   id: 0 cuna multiple JMI $ 39200,
   id: 1 carrito Carestino  $ 32999,
   id: 2 bañadera Love $ 8900,
   id: 3 Kit sacaleche Event $ 26999
   id: 4 kit mamaderas Chicco $9089
   id: 5 chupetes Pacifier $1089
   END para finalizar!`);
    if (ingresar >= 0 && ingresar <= 5) {
        alert(`usted selecciono el producto ${mercaderia[ingresar].nombre} cuyo valor es ${mercaderia[ingresar].valor}`)
        console.log(ingresar)
        acumulado = acumulado + mercaderia[ingresar].valor;
        console.log(acumulado);
        alert(`el valor acumulado es ${acumulado}`);
        alert(`total de valor de la compra ${iva(acumulado)}`);
        console.log(iva(acumulado));
    } else if (ingresar === "END") {
        alert("gracias por su compra!")
    }
    else {
        alert("ingrese un numero valido");
    }
}

//! productos
//TODO: por consola los productos ordenados por valor
let ordenadosAscendientes = [];
let ordenadosDescendiente = [];

ordenadosAscendientes = mercaderia.map(elemento => elemento);
ordenadosDescendiente = mercaderia.map(elemento => elemento);
ordenadosAscendientes.sort(function(a,b) { 
    return a.valor - b.valor});
console.log("ordenados ascendiente");
console.log(ordenadosAscendientes);
ordenadosDescendiente.sort(function(a,b) { 
    return b.valor - a.valor});
console.log("ordenados descendiente");
console.log(ordenadosDescendiente);

//console.log(` DEBERIA APARECER LOS PRODUCTOS! ${carrito}`);

//TODO: productos DOM

let productos = document.getElementById("productos");
for (const prod of mercaderia){
    let list = document.createElement("li");
    list.innerHTML = 
    `<h3>ID:${prod.id}</h3>
    <p>desc: ${prod.nombre}</p>
    <p>marca: ${prod.marca}</p>
    <h3> $ ${prod.valor}</h3>`;
    productos.append(list);
}


//TODO: clientes DOM
nombreApellido = prompt("Intruduzca Apellido!");
dni = prompt("Intruduzca dni!");
tarjataNum = prompt("Intruduzca nº tarjeta!");
codSeg = prompt("codigo de seg");

//! DOM clientes
persona.push = new Clientes(nombreApellido,dni,tarjataNum,codSeg);
let cliente = document.getElementById("cliente");
let li = document.createElement("li");
li.innerHTML = `<H3> Datos del Comprador: </H3><br>

                <p><b> Cliente: ${nombreApellido} </b></p>
                <p><b> dni: ${dni}<b> </p>
                <p> Tarjeta de cred: ${tarjataNum}</p>`;
cliente.append(li);