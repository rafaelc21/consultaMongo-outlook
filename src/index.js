const express = require('express');
const path = require('path');
var cors = require('cors');

const bodyParser = require('body-parser');
const dotenv = require('dotenv')

const exphbs = require('express-handlebars');
const methodOverride = require('method-override')
const session = require('express-session');


const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
 
//Inicialización
const app = express();
app.use(cors());

require('dotenv').config();


app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(exphbs)
}));
app.set('view engine', 'handlebars');

//Settings
app.set('port', process.env.PORT || 3005);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaulLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: '.hbs'
}));

app.set('view engine','.hbs');

//Midlewares
app.use((req, res, next) => {
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'MSA0818201359',
    resave:false,
    saveUninitialized:true
}));


require('./database');

//Routes
app.use(require('./routes/correo'));

// static files
app.use(express.static(path.join(__dirname,'public')));

// Server
app.listen(app.get('port'),()=>{
    console.log('Server listo', app.get('port'))
});