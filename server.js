const express = require('express');
const app = express();
var hbs = require('hbs');

const puerto = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');


// creamos midURL para un directorio público
app.use(express.static(__dirname + '/views'))
app.set('view engine', 'hbs');

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


// path de home
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'David Guillermo'
    });
});

// path de about
app.get('/about', (req, res) => {

    res.render('about');
});




// Creamos otro servicio para la ruta que se va a usar para hacer peticia¿ones
// ===========================

// app.get('/', (req, res) => {

//     res.send('Hola data')
// });

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
});