let platos = [
    {
        id: 1,
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: "U$S 65.50",
        imagen: "/images/Carpaccio-de-salmon.jpg"
    },
    {
        id: 2,
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: "U$S 47.00",
        imagen: "/images/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id: 3,
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: "U$S 27.50",
        imagen: "/images/Mousse-de-arroz-con-leche.jpg"
    },
    {
        id: 4,
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: "U$S 37.50",
        imagen: "/images/esparragos.jpg"
    }
];

const detailContr = {
    detailMethod: (req, res) => {
        res.render('detail', {
            title: 'Pimienta & Sal',
            listadoPlatos: platos,
            platoId: req.params.id
        });
    }
}

module.exports = detailContr;