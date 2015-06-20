/**
 * Created by scastillo on 4/23/15.
 */
module.exports = function (app) {
    app.get("/products", function (req, res) {
        res.send(JSON.stringify([
            {
                "Id": "1",
                "Categoria": "Librería",
                "Producto": "Borrador Perfecto",
                "Precio": "0.5",
                "Imagen": "http://images.wikia.com/inciclopedia/images/5/57/Borrador.jpg"
            },
            {
                "Id": "2",
                "Categoria": "Librería",
                "Producto": "Lápiz Carboncito",
                "Precio": "1",
                "Imagen": "http://cd1.dibujos.net/dibujos/pintados/201110/45bdaddccd13fdcfd61764cc91302190.png"
            },
            {
                "Id": "3",
                "Categoria": "Librería",
                "Producto": "Regla Rectitud",
                "Precio": "1.2",
                "Imagen": "http://us.123rf.com/400wm/400/400/wayoutwest/wayoutwest0705/wayoutwest070500013/912524-una-regla-de-madera-de-30-centimetros-aislada-en-un-fondo-blanco-muevalo-de-un-tiron-encima-para-una.jpg"
            },
            {
                "Id": "4",
                "Categoria": "Baño",
                "Producto": "Jabón Cochinin",
                "Precio": "1.5",
                "Imagen": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tualetsapo.jpg/200px-Tualetsapo.jpg"
            },
            {
                "Id": "5",
                "Categoria": "Baño",
                "Producto": "Papel Higienico",
                "Precio": "0.7",
                "Imagen": "http://sobrecuriosidades.com/wp-content/uploads/2011/12/papel-higienico.jpg"
            },
            {
                "Id": "6",
                "Categoria": "Alimentos",
                "Producto": "Leche Gloria",
                "Precio": "2.5",
                "Imagen": "http://www.connuestroperu.com/images/stories/cosas/alimentos/lacteos/lata_leche_gloria.jpg"
            },
            {
                "Id": "7",
                "Categoria": "Alimentos",
                "Producto": "Mantequilla La Vaquita",
                "Precio": "2.8",
                "Imagen": "http://www.semillalandia.com/blog/wp-content/uploads/2012/02/mantequilla.jpg"
            },
            {
                "Id": "8",
                "Categoria": "Alimentos",
                "Producto": "Fideos El Flaco",
                "Precio": "2.9",
                "Imagen": "http://www.pepekitchen.com/wp-content/uploads/2009/11/fideos.jpg"
            }
        ]))
    })
};