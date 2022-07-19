//! 
let ingresar = "";
let listados = [];
let acumulado = 0;
let carrito = [];

class Productos {
    constructor(id,nombre,marca,valor){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.valor = valor;
    }
}  

const Bebidas =[ 
{
    id: 0,
    nombre: "IPA", 
    marca: "Quilmes",
    valor: 300,
    },
    {
    id: 1,
    nombre: "Bock", 
    marca: "Stella Artour",
    valor: 320,
    },
    {
    id: 2,
    nombre: "Cerveza rubia", 
    marca: "Corona",
    valor: 89,
    },
    {
    id: 3,
    nombre: "Roja", 
    marca: "Andes",
    valor: 260,
    },
    {
    id: 4,
    nombre: "Citrica", 
    marca: "Artesanal",
    valor: 90,
    },
    {
    id: 5,
    nombre: "Doble Ipa", 
    marca: "Artesanal",
    valor: 108,
    },

]

const iva = a => a*1.21 ;

