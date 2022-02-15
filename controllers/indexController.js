let platos = [
    {
        id: 1,
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: "U$S 65.50"
    },
    {
        id: 2,
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: "U$S 47.00"
    },
    {
        id: 3,
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: "U$S 27.50"
    },
    {
        id: 4,
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: "U$S 37.50"
    }
];

let aboutUs = {
    parrafo1: "Este es el primer párrafo de nuestra página Pimienta y Sal, un famosisimo restaurante localizado en la Ciudad de Buenos Aires (Argentina).",
    parrafo2: "Este es el primer párrafo de nuestra página Pimienta y Sal, un famosisimo restaurante localizado en la Ciudad de Buenos Aires (Argentina)."
}

const indexContr = {
    indexMethod: (req, res) => {
        res.render('index', {
            title: 'Pimienta & Sal',
            listadoPlatos: platos,
            about: aboutUs
        });
    }
}

module.exports = indexContr;