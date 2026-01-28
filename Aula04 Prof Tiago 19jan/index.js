// const http = require("http")
// const port = 3000;

// const server = http.createServer((req, res)=>{
//     res.write(`<h1> Oi, HTTP! Escrevi mais alguma coisa...</h1>
//         <p> Renderizando um parágrafo... </p>`
//     )
//     res.end();
// })

// server.listen(port, ()=>{
//     console.log(`O servidor está rodando na porta ${port}`)
// })



// const url =  require('url')
// const address = 'http://meusite.com.br/catalog?produtos=cadeira'

// const parseUrl = new url.URL(address)

// console.log(parseUrl.host)
// console.log(parseUrl.pathname)
// console.log(parseUrl.search)
// console.log(parseUrl.searchParams)


const http = require('http')
const url = require('url')
const port = 3000;

const server = http.createServer((req, res)=>{
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        res.end(` <h1> Preencha o seu nome </h1>
            <form method="GET">
                <input type="text" name="name"/>
                input type="submit" value = Enviar"/>>

            </form>
            `)
    } else{
        res.end(`<h1>Seja Bem-vindo! ${name}</h1>`)
    }
})

server.listen(port, ()=>{
    console.log(`O servdor está rodando na porta ${port}`)
})