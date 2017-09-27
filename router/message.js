const express = require("express")
const router = express.Router();
const Message = require("../model/Message")

router.get('/message/new',function(req, res){
  res.render("message")
})
router.post('/message/new', function(req, res){
  const message = new Message()
  message.title = req.body.title
  message.body = req.body.body
  message.username = req.user.username
  message.createAt = Date.now()
  message.save()
  .then(function(link){
    res.redirect("/")
  })
  .catch(function(error){
    console.log("MESSAGE ERROR");
    res.render("message", {
      error: error
    })
  })
})




module.exports = router;
