const fs = require('fs'); 

let data = {
    "estudiantes": [{
        "codigo": "SMIS033128",
        "nombre": "Eduardo Jose Funes Maravilla", 
        "edad": "18",
        "sexo": "Masculino"
    }, {
        "codigo": "SMIS040567",
        "nombre": "Maria de la Paz Quintanilla Robles", 
        "edad": "20",
        "sexo": "Femenino"
    }, {
        "codigo": "SMIS032190",
        "nombre": "Victor Manuel Lopez Argueta", 
        "edad": "22",
        "sexo": "Masculino"


    }]
};

let jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(typeof(jsonData));

fs.writeFile('estudiantes.json', jsonData, (error) =>{
    if (error) {
        console.log(`Error al generar el archivo JSON: ${error}`);
    } else {
        console.log("Archivo JSON generado con éxito");
    }
});