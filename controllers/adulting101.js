var express = require('express');
const db = require('../models');
var router = express.Router();
const axios = require('axios');



router.post('/newAppetizer', ((req, res) => {
  let recipeUrl = `http://www.recipepuppy.com/api/?q=appetizer&i=${req.body.app_ingredients}`
  axios.get(recipeUrl).then((apiResponse) => {
    let appetizerOptions = apiResponse.data
    res.render('./adulting101/appetizer', {appetizer: appetizerOptions})
  }).catch((error) => 
  console.log(error)
  )
  }))


router.post('/menu', ((req, res) => {
  let chosenAppetizer = req.body
  console.log(chosenAppetizer)
  res.render('./adulting101/menu', {appetizer: chosenAppetizer})
}))

module.exports = router;