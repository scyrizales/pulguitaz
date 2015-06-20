/**
 * Created by scastillo on 4/23/15.
 */
module.exports = function (app) {
    var categorias = [
            {
                "id": "1",
                "descripcion": "Librería"
            },
            {
                "id": "2",
                "descripcion": "Baño"
            },
            {
                "id": "3",
                "descripcion": "Alimentos"
            }
        ],
        productos = [
            {
                "id": "1",
                "categoria": "1",
                "descripcion": "Borrador Perfecto",
                "precio": "0.5",
                "imagen": "http://images.wikia.com/inciclopedia/images/5/57/Borrador.jpg"
            },
            {
                "id": "2",
                "categoria": "1",
                "descripcion": "Lápiz Carboncito",
                "precio": "1",
                "imagen": "http://cd1.dibujos.net/dibujos/pintados/201110/45bdaddccd13fdcfd61764cc91302190.png"
            },
            {
                "id": "3",
                "categoria": "1",
                "descripcion": "Regla Rectitud",
                "precio": "1.2",
                "imagen": "http://us.123rf.com/400wm/400/400/wayoutwest/wayoutwest0705/wayoutwest070500013/912524-una-regla-de-madera-de-30-centimetros-aislada-en-un-fondo-blanco-muevalo-de-un-tiron-encima-para-una.jpg"
            },
            {
                "id": "4",
                "categoria": "2",
                "descripcion": "Jabón Cochinin",
                "precio": "1.5",
                "imagen": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tualetsapo.jpg/200px-Tualetsapo.jpg"
            },
            {
                "id": "5",
                "categoria": "2",
                "descripcion": "Papel Higienico",
                "precio": "0.7",
                "imagen": "http://sobrecuriosidades.com/wp-content/uploads/2011/12/papel-higienico.jpg"
            },
            {
                "id": "6",
                "categoria": "3",
                "descripcion": "Leche Gloria",
                "precio": "2.5",
                "imagen": "http://www.connuestroperu.com/images/stories/cosas/alimentos/lacteos/lata_leche_gloria.jpg"
            },
            {
                "id": "7",
                "categoria": "3",
                "descripcion": "Mantequilla La Vaquita",
                "precio": "2.8",
                "imagen": "http://www.semillalandia.com/blog/wp-content/uploads/2012/02/mantequilla.jpg"
            },
            {
                "id": "8",
                "categoria": "3",
                "descripcion": "Fideos El Flaco",
                "precio": "2.9",
                "imagen": "http://www.pepekitchen.com/wp-content/uploads/2009/11/fideos.jpg"
            }
        ];
    app.get("/categories", function (req, res) {
        res.send(JSON.stringify(categorias));
    });
    app.get("/products/category/:categoryId", function (req, res) {
        var categoryId = req.param("categoryId");
        if (categoryId == "all") {
            res.send(JSON.stringify(productos))
        } else {
            res.send(JSON.stringify(productos.filter(function (p) {
                return p.categoria == categoryId;
            })));
        }
    });
    app.get("/products", function (req, res) {
        res.send(JSON.stringify(productos))
    });
    app.get("/products/:productId", function (req, res) {
        var productId = req.param("productId");
        res.send(JSON.stringify(productos.filter(function (p) {
            return p.id == productId;
        })[0] || {}));
    });
};