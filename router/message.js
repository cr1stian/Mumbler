const express = require("express")
const router = express.Router();
const model = require('../models')


router.post('/post', (req, res) =>{

  sess = req.session

  if(sess.username){
    model.user.findOne({
       where:{
         username: sess.username
    }
  }).then( (user)=> {

sess = req.session

console.log("his name " + sess.username)


const newPost = model.post.build({
  userId: user.id,
  body: req.body.post,
  username: sess.username
  })
  newPost.save().then(function(){
    return res.redirect('/homepage')
  })
 })
}
});

router.post('/comment/:id', (req, res) => { //here we grab the ID from the post we are commenting to

  sess = req.session
  const username = sess.username


  const newComment = model.comment.build({
    postId: req.params.id,
    body: req.body.comment,
    username: req.username
  })
  newComment.save().then(function(){
    res.redirect('/homepage')
  })

});















module.exports = router;
