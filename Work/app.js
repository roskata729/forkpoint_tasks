/* eslint-disable no-shadow */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable global-require */

// Module dependencies.
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const _ = require('underscore');

const { MongoClient } = require('mongodb');
//const mainCat = require('./routes/mainCat');

const routes = {
  index: require('./routes/index'),
  hello: require('./routes/hello'),
  mainCat: require('./routes/mainCat'),
  subCat: require('./routes/subCat'),
};

const connectionString =
  'mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test';

const app = express();

// All environments
app.set('port', 1666);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.cookieParser('61d333a8-6325-4506-96e7-a180035cc26f'));
app.use(
  session({
    secret: 'forkpoint training',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
app.use(express.errorHandler());

// App routes
app.get('/', routes.index);
app.get('/hello', routes.hello);
app.get('/mainCat/:id', routes.mainCat);
app.get('/subCat/:id', routes.subCat);
//app.get('/product', routes.subCat);

// Run server
function startServer() {
  http.createServer(app).listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
  });
}

//DB Setup
const mongoUtil = require('./mongo');

mongoUtil.connectToServer(() => startServer());
