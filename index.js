//Инициализация необходимых пакетов
const express = require ('express');
const path = require ('path');
const exphbs = require ('express-handlebars');



const homeRoutes = require('./routes/home');
const delpayRoutes = require('./routes/delpay');
const prodreturnRoutes = require('./routes/prodreturn');
const contactsRoutes = require('./routes/contacts');
const helpRoutes = require('./routes/help');

const cartRoutes = require('./routes/cart');
const accountRoutes = require('./routes/account');

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine); 
app.set('view engine', 'hbs'); 
app.set('views', 'views');

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/delpay', delpayRoutes);
app.use('/prodreturn', prodreturnRoutes);
app.use('/contacts', contactsRoutes);
app.use('/help', helpRoutes);

app.use('/cart', cartRoutes);
app.use('/account', accountRoutes);


app.listen(4000, (err) => { 
    if (err) {
        return console.log(err);
    }
    
    console.log('Server OK');
});