var express = require('express');
const db = require('../models');
var router = express.Router();
const axios = require('axios');
let newMenu =

router.get('/newAppetizer', ((req, res) => {
  db.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(foundUser => {
    console.log(foundUser,'☎️')
    db.menu.create({
      name: req.body.menuName,
  }).then(newMenu => {
    foundUser.addMenu(newMenu)
    console.log(`You created a new menu called ${newMenu.name}`)
  }).then(relationInfo => {
    res.render(`adulting101/newAppetizer`)
  }).catch((error) => 
  console.log(error)
  )
  })
}))

router.post('/newAppetizer', ((req, res) => {
  let recipeUrl = `http://www.recipepuppy.com/api/?q=appetizer&i=${req.body.app_ingredients}`
  axios.get(recipeUrl).then((apiResponse) => {
    let appetizerOptions = apiResponse.data
    res.render('adulting101/appetizer', {appetizer: appetizerOptions})
  }).catch((error) => 
  console.log(error)
  )
  }))


router.post('/menu', ((req, res) => {
  let chosenAppetizer = req.body
  res.render('./adulting101/menu', {appetizer: chosenAppetizer})
}))

router.post('/newMain', ((req, res) => {
  res.render('./adulting101/newMain')
}))

module.exports = router;