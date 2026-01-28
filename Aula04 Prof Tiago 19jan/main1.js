const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const port =  3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const basePath = path.join(__dirname, 'templates')

// Exemplo: wwww.google.com/produtos/12
// A informação .../12, varia de acordo com o id do produto


app.get('/', (req, res)=>{
    res.render(`index`)
})


app.get('/users/add', (req, res)=>{
    res.render(`userform`)
})


app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.render(`users`)
})


app.post('/users/save', (req, res)=>{
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

    res.render(`home`, {name, age})
})



app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`)
}) 
