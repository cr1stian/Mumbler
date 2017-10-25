const express = require("express")
const router = express.Router();
const models = require('../models');

router.get('/login', (req, res) =>{
  res.render('login')
})


router.post('/login', (req, res) =>{
  const username = req.body.username
  const password = req.body.password
  sess = req.session

 models.user.findOne({
    where:{
      username: username
    }
  }).then( (user) => {
    if(user.password === password){
      sess.username = user.username
      sess.password = user.password
      console.log(sess)
      return res.redirect('homepage')
    }
    else{
      let error = "Password is incorrect. "
      response.render('login',{
        error: error
      })
    }
  })
})

router.post('/logout', (req, res) => {
    sess = req.session
    sess.username = ''
    sess.password = ''

 return res.redirect('/login')


})















module.exports = router;
