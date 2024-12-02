const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

const store = new MongoStore({
    collection: 'sessions', 
    uri: MONGODB_URI
});

app.use(session({
    secret: 'secret text 190',
    resave: false,
    saveUninitialized: false,
    store
}));