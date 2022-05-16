const fs= require('fs');

fs.appendFile('document.txt', 'El objetivo de la generacion de este archivo es para prueba de codigo', (error)=>{
    if(error){
        throw error;
    }
    console.log('El archivo txt fue creado con exito');
});


