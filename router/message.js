const express = require("express")
const router = express.Router();
const model = require('../models')

router.post('/post', (req, res) =>{

  sess = req.session
  const username = sess.username

  if(username){
    model.user.findOne({
       where:{
         username: username
    }
  }).then( (user)=> {


const newPost = model.post.build({
  userId: user.id,
  body: req.body.post
  })
  newPost.save().then(function(){
    res.redirect('/homepage')
  })
 })
}
});

router.post('/comment/:id', (req, res) => { //here we grab the ID from the post we are commenting to

  const newComment = model.comment.build({
    postId: req.params.id,
    body: req.body.comment
  })
  newComment.save().then(function(){
    res.redirect('/homepage')
  })
});
















module.exports = router;
