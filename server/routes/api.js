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

module.exports = router;
