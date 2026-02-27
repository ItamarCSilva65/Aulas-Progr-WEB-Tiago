const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000
const SUPPORTED_LANGS = ['pt', 'en', 'fr', 'es']

// Middlewares
app.use(cookieParser())
app.engine('handlebars', exphbs.engine({
    helpers: {
        // Format currency in BRL
        formatCurrency: (value) => {
            if (typeof value !== 'number') return value;
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        },
        // t(translations, lang) — picks the right language field
        // Usage in template: {{t this.nome lang}}
        t: (obj, lang) => {
            if (!obj || typeof obj !== 'object') return obj || '';
            if (!lang || !SUPPORTED_LANGS.includes(lang)) lang = 'pt';
            return obj[lang] || obj['pt'] || '';
        }
    }
}));
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Language middleware — reads lang cookie and exposes to all templates
app.use((req, res, next) => {
    const lang = req.cookies.isoacademy_lang;
    res.locals.lang = SUPPORTED_LANGS.includes(lang) ? lang : 'pt';
    next();
})

// Import routes
const router = require('./routes/index');

// Use routes
app.use('/', router);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})