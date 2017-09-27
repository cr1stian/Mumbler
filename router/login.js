const express = require("express")
const router = express.Router();
const User = require("../model/registerSchema")

router.get('/login', function(request, response){
  response.render('login')
})

router.post('/home', function(request, response){
  User.findOne({
    username: request.body.username,
    password: request.body.password
  }).then(function(user){
    if(user){
      console.log(user)
      request.session.userId = user._id
      response.render('homepage', {
        name: user.name
       })
    }else{
      let error = " "
      response.render('login',{
        error: error
      })
    }
  })
})

router.post('/logout',function(req, res){
  req.session.destroy(function(){
    res.redirect('/login')
  })
})



module.exports = router;
//must render person's name when logging in
