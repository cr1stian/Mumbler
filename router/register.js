const express = require("express")
const router = express.Router();
const User = require("../model/registerSchema")

router.get('/register', function(request, response){

  response.render('register')
})



router.post('/register', function(request, response){
  if(request.body.newPass === request.body.confirm){
    const user = new User();
    user.name = request.body.name
    user.username = request.body.newUser
    user.password = request.body.newPass
    user.save()
    .then(function(user){
      request.session.userId = user._id
      response.redirect('/')
    })
    .catch(function(error){
      response.render('register',{
        error: error
      })
    })
  }else{
    let error_message = " "
    response.render('register', {
      error_message: error_message
    })
    }
})


module.exports = router;
