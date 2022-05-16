const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'nombres.csv',
  header: [
    {id: 'nombre', title: 'Nombre'},
    {id: 'apellido', title: 'Apellido'},
    {id: 'edad', title: 'Edad'},
  ]
});

const data = [
  {
    nombre: 'Aldo',
    apellido: 'Araniva',
    edad: 25,
  }, {
    nombre: 'Isabel',
    apellido: 'Santos',
    edad: 19,

  }, {
    nombre: 'Eduardo',
    apellido: 'Chavez',
    edad: 27,
    
  }
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('El archivo CSV se creo con exito.'));
