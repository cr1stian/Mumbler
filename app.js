const express = require('express');
const app = express();
const model = require('./models');
const session = require('express-session');
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const models = require('./models')

app.use(express.static('public'));
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: false}));

var sess = {
  secret: 'BikiniBottom',
  cookie: {},
  resave: true,
  saveUninitialized: true
};

app.use(session(sess));

app.get('/', function(req, res){
  res.render('index');
});


app.get('/homepage', (req, res) => {

sess = req.session
const username = sess.username

if(username){
  models.post.findAll({
    include: [{
      model: models.comment,
      as: 'comment'
    }]
  }).then((content) => {
    return  res.render('homepage', {
      user: username,
      content: content
    })
  })
}else {
  return res.redirect('/login')
}
})



const newPost = require("./router/message");
const login = require("./router/login");
const register = require("./router/register");


app.use(newPost);
app.use(login);
app.use(register);




app.listen(3000);
console.log('Up and Running');
