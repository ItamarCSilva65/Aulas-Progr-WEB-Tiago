const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

//A partir dai, começar a criar as rotas
app.get('/', (req, res) => {
    const user = {
        name: 'Itamar',
        surname: 'Silva',
        age: 60,
        email: 'itamar.silva@example.com'
    }

    //código para renderizar a página inicial
    res.render('home', { user })
})

app.get('/user', (req, res) => {
    const user = {
        name: 'Itamar',
        surname: 'Silva',
        age: 60,
        email: 'itamar.silva@example.com'
    }

    const listaFavoritos = ['Camarão', 'Carne de sol', 'Caminhada', 'Natação', 'Cyclismo', 'Mixed Martial Arts - MMA']


//Trocando "true" por "false", aparece a informação na página de que o usuário não está autenticado.
const auth = true

    //código para renderizar a página do usuário
    res.render('user', { user, auth, listaFavoritos })
})



//Este procedimento é o básico para iniciar o servidor.

app.listen(port, () => {
    console.log('O Servidor está rodando na porta ${port}')
})
