var deportes = {
    conBalon : ["Football", "Basketball", "Rugby"],
    sinBalon : ["Boxeo", "Surf", " Trekking"],
}

var persona = { 
    nombre: "wassa",
    edad: 33,
    estudios : {
        esProgramador: false
    }
}

//console.log(persona.edad)

var autos = {};
autos.marcas=["Ford", "Audi", "Ferrari"];
autos.tipo=["Carro", "Camioneta", "Moto", ]
console.log(autos);
delete autos.tipo;
console.log(autos);

// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);