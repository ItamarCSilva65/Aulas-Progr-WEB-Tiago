const express = require('express');
const { engine } = require('express-handlebars');
const port = 3000
const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Arquivos estáticos (CSS)
app.use(express.static('public'));

// Dados simulados
const products = [
    { id: 1, name: "Teclado Mecânico", price: 250.00, desc: "Switch Blue com RGB.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Mouse Gamer", price: 120.00, desc: "12000 DPI e botões laterais.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Monitor 144hz", price: 1100.00, desc: "Painel IPS de 24 polegadas.", image: "https://via.placeholder.com/150" }
];

// Rota Home
app.get('/', (req, res) => {
    res.render('home', { products });
});

// Rota Individual de Produto
app.get('/product/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    
    if (!product) {
        return res.status(404).send("Produto não encontrado.");
    }

    res.render('product', { product });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000! 🚀");
});