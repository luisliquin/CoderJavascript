//! 
let ingresar = "";
let listados = [];
let acumulado = 0;
let carrito = [];

class Productores {
    constructor(id,nombre,marca,valor){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.valor = valor;
    }
}  


const mercaderia =[ 
{
    id: 0,
    nombre: "cuna multiple", 
    marca: "JMI",
    valor: 39200,
    },
    {
    id: 1,
    nombre: "carrito", 
    marca: "Carestino",
    valor: 32999,
    },
    {
    id: 2,
    nombre: "bañadera", 
    marca: "Love",
    valor: 8900,
    },
    {
    id: 3,
    nombre: "Kit sacaleche", 
    marca: "Event",
    valor: 26999,
    },
    {
    id: 4,
    nombre: "Kit de mamaderas", 
    marca: "Chicco",
    valor: 9089,
    },
    {
    id: 5,
    nombre: "chupetes", 
    marca: "Pacifier",
    valor: 1089,
    },

]

const iva = a => a*1.21 ;

