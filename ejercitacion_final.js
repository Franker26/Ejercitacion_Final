// Definimos las misiones y sus características
const misiones = [

    { nombre: "Liberar una princesa", encargadaPor: "Lord Farquaad", dificultad: 0, trolls: 4 },
    { nombre: "Buscar un objeto mágico", encargadaPor: "Señor Gandalf", dificultad: 0, distancia: 40 },

    // Puedes agregar más misiones aquí
];


// Variable para almacenar el total de puntos de recompensa
let puntosRecompensa = 0;


// Variable para almacenar las misiones difíciles
const misionesDificiles = [];


// Iteramos sobre las misiones
for (let i = 0; i < misiones.length; i++) {
    const mision = misiones[i];
    
    // Determinamos si la misión es difícil
    if (mision.encargadaPor.charAt(0) === "G" && 
        ((mision.nombre === "Liberar una princesa" && (mision.trolls === 4 || mision.trolls === 5)) ||
        (mision.nombre === "Buscar un objeto mágico" && mision.distancia > 100))) {
        misionesDificiles.push(mision.nombre + " (Encargada por: " + mision.encargadaPor + ")");

    }
    

    // Calculamos el total de puntos de recompensa
    if (mision.nombre === "Liberar una princesa") {

        puntosRecompensa += mision.trolls * 2;
    } else if (mision.nombre === "Buscar un objeto mágico") {

        puntosRecompensa += (mision.distancia <= 50) ? 10 : 5;

    }

}



// Mostramos los resultados
console.log("Misiones difíciles:");
console.log(misionesDificiles.join(", "));
console.log("Total de puntos de recompensa: " + puntosRecompensa);

