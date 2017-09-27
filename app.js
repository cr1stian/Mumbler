const express = require("express");
const app = express();
const mustache = require("mustache-express")
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');


app.use(express.static('style'));
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/view'));
app.use(bodyParser.urlencoded({extended: false}))
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://0.0.0.0:27017/mumbler")

var sess = {
  secret: 'BikiniBottom',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {},
  resave: true,
  saveUninitialized: true
}
app.use(session(sess))

app.get('/', function(request, response){
 response.render('index');
})


const login = require("./router/login")
const register = require("./router/register")
const newPost = require("./router/message")


app.use(login);
app.use(register);
app.use(newPost);








app.listen(3000, function(){
  console.log("Listening to Your Problems")
})
