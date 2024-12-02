const exphbs = require ('express-handlebars');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});