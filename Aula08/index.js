const express = require('express')
const exphbs = require('express-handlebars')
const coursesData = require('./data/coursesData')
const coursos_gratuitos = require('./data/coursos_gratuitosData')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// IMPORTANTE: Necessário para ler dados enviados via formulário (POST)
app.use(express.urlencoded({ extended: true }));




app.get('/', (req,res)=>{
    res.render('home', {products})
})

app.get('/product/:id', (req, res)=>{
    const product = products[parseInt(req.params.id)-1]
    res.render('product', {product})
    })

app.get('/cursos', (req, res) => {
    res.render('cursos', {coursesData})
});

app.get('/cursos_gratuitos', (req, res) => {
    res.render('cursos_gratuitos', {coursos_gratuitos})
});


app.get('/cursos', (req, res) => {
    res.render('cursos')
});


app.get('/cursos_in_company', (req, res) => {
    res.render('cursos_in_company')
});


app.get('/cursos_em_destaque', (req, res) => {
    res.render('cursos_em_destaque')
});



app.get('/nossos_numeros', (req, res) => {
    res.render('nossos_numeros')
});




app.get('/depoimentos', (req, res) => {
    res.render('depoimentos')
});



app.get('/carrinho', (req, res) => {
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



// Rota para receber o novo comentário
//app.post('/product/:id/comment', (req, res) => {
   // const productId = parseInt(req.params.id);
  //  const newComment = req.body.comment;

  //  const product = products.find(p => p.id === productId);
    
  //  if (product && newComment) {
  //      product.comments.push(newComment);
 //   }

//   res.redirect(`/product/${productId}`);
//});


app.listen(port, ()=>{
    console.log('O servidor está rodando na porta ${port}')
})