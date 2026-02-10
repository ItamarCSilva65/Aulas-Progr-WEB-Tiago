const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', require('./routes/index'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔥 ICEC rodando em http://localhost:${PORT}`);
});