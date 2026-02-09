// routes/shop.js
const express = require('express');
const router = express.Router();
const coursesData = require('../data/coursesData');

// Rota Home
router.get('/', (req, res) => {
    const cursosDestaque = coursesData.filter(c => c.destaque);
    res.render('home', { 
        title: 'ISO Academy - Excelência em Normas',
        courses: cursosDestaque
    });
});

// Rota para listar todos os cursos
router.get('/cursos', (req, res) => {
    res.render('home', { 
        title: 'Todos os Nossos Cursos',
        courses: coursesData,
        isFullList: true
    });
});

// Rota Detalhes do Produto
router.get('/curso/:id', (req, res) => {
    const courseId = req.params.id;
    const course = coursesData.find(c => c.id === courseId);

    if (!course) {
        return res.status(404).render('404', { title: 'Curso não encontrado' });
    }

    res.render('produto', { 
        title: `${course.nome} - Detalhes`, 
        course 
    });
});

// Rota Carrinho (Conectada com o botão de compra)
router.get('/carrinho', (req, res) => {
    // Verifica se veio um ID pela URL (ex: /carrinho?add=iso-9001)
    const addedId = req.query.add;
    
    let cartItems = [];
    
    if (addedId) {
        // Se o usuário clicou em comprar, mostra SÓ aquele curso no carrinho (Simulação)
        const item = coursesData.find(c => c.id === addedId);
        if (item) cartItems.push(item);
    } else {
        // Se ele apenas clicou no ícone do carrinho, mostra um carrinho padrão vazio ou com exemplos
        // Para demo, vamos deixar vazio se não tiver param, ou sugerir o destaque
        cartItems = []; 
    }

    // Calcula total
    const total = cartItems.reduce((acc, item) => acc + item.preco, 0);

    res.render('carrinho', { 
        title: 'Seu Carrinho de Compras', 
        cartItems, 
        total: total.toFixed(2),
        hasItems: cartItems.length > 0
    });
});

// Rota Checkout
router.get('/checkout', (req, res) => {
    res.render('checkout', { title: 'Finalizar Matrícula' });
});

// Rota Processamento de Compra
router.post('/finalizar-compra', (req, res) => {
    const { nomeCliente, emailCliente } = req.body;
    // Simulação de sucesso
    res.send(`
        <div style="text-align: center; padding: 50px; font-family: sans-serif;">
            <div style="font-size: 60px; color: #27ae60;">✓</div>
            <h1 style="color: #2c3e50;">Matrícula Confirmada!</h1>
            <p>Obrigado, <strong>${nomeCliente}</strong>.</p>
            <p>Os dados de acesso foram enviados para <strong>${emailCliente}</strong>.</p>
            <br>
            <a href="/" style="display: inline-block; padding: 10px 20px; background: #3498db; color: white; text-decoration: none; border-radius: 5px;">Voltar para a Home</a>
        </div>
    `);
});

module.exports = router;