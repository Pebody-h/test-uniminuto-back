const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let products = [
    {id: 1, name: 'Camiseta', price: 20},
    {id: 2, name: 'Pantalon', price: 30},
    {id: 3, name: 'Zapatos', price: 50},
]

// Crear un producto
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    const newProduct = { 
        id: products.length + 1, 
        name: name, 
        price : price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
})

// Obtener todos los productos
app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto', port);
})