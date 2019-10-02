const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = process.env.DB;
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
  if (err) {
    console.log('connection error');
  }
});

router.get('/posts', function (req, res) {
  console.log("requesting posts");
  post.find({})
    .exec(function (err, posts) {
      if (err) {
        console.log("error getting posts");
      } else {
        res.json(posts);
        console.log(posts);
      }
    })

});

router.get('/posts/:id', function (req, res) {
  console.log("requesting post");
  post.findById(req.params.id)
    .exec(function (err, post) {
      if (err) {
        console.log("error getting post");
      } else {
        res.json(post);
        console.log(post);
      }
    })

});

router.post('/post', function (req, res) {
  console.log("posting post");
  var newPost = new post();
  newPost.title = req.body.title;
  newPost.url = req.body.url;
  newPost.description = req.body.description;
  newPost.save(function (err, addedPost) {
    if (err) {
      console.log("Error adding the post");
    } else {
      res.json(addedPost);
    }

  })

});

module.exports = router;
