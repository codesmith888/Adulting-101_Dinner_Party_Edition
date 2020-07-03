var express = require('express');
const db = require('../models');
var router = express.Router();
const axios = require('axios');

router.get('/', ((req, res) => {
  res.render('./adulting101/new')
}))

router.post('/new', ((req, res) => {
  console.log('hello')
  let recipeUrl = `http://www.recipepuppy.com/api/?q=appetizer&i=${req.body.ingredients}`
  axios.get(recipeUrl).then((apiResponse) => {
    let appetizerOptions = apiResponse.data
    console.log(appetizerOptions)
    res.render('./adulting101/appetizer', {appetizer: appetizerOptions})
  }).catch((error) => 
  console.log(error)
  )
}))

module.exports = router;