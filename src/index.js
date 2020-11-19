const express= require('express');
const app= express();
const path= require('path');
const morgan=  require('morgan')

//settings
app.set('appName','proyect');
app.set('port', '3000');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'))
//routes

app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),()=>{
    console.log(app.get('appName'));
    console.log('server on port', app.get('port'));
});