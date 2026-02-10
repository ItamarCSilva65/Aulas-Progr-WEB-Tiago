const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// IMPORTANTE: Necessário para ler dados enviados via formulário (POST)
app.use(express.urlencoded({ extended: true }));

const products = [
    {   id: 1,
        title: "Livro",
        price: 12.99,
        description: "Aprenda a criar aplicações escaláveis e de alta performance com este guia completo.",
        sales: 154,
        comments: ["Livro excelente!", "Didática muito boa.", "Super recomendo!"]
    },
    {   id: 2,
        title: "Caneca",
        price: 49.99,
        description: "Caneca de cerâmica de alta qualidade para acompanhar suas madrugadas de código.",
        sales: 89,
        comments: ["Linda!", "Fica uma gracinha na mesa!", "Chegou rápido."]
    },
    {   id: 3,
        title: "Camisa",
        price: 59.99,
        description: "Conforto e estilo com tecido 100% algodão para o dia a dia.",
        sales: 210,
        comments: ["Amei o caimento.", "Tecido muito bom.", "Vou comprar outra."]
    }
]

app.get('/', (req,res)=>{
    res.render('home', {products})
})

app.get('/product/:id', (req, res)=>{
    const product = products[parseInt(req.params.id)-1]
    res.render('product', {product})
    })


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