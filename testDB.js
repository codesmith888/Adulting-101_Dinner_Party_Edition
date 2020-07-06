var express = require('express');
const db = require('./models');
const { default: Axios } = require('axios');
var router = express.Router();

// router.get('/adulting101/new', ((req, res) => {
//   let recipeURL = `http://www.recipepuppy.com/api/?q=appetizer&i=${req.body.ingredients}`
//   axios.get(recipeUrl).then((apiResponse) => {
//     let appetizerOptions = apiResponse
//     res.render('adulting101/', {appetizer: appetizerOptions})
//   }).catch((error) => 
//   console.log(error)
//   )
// }))

router.get('/', ((req, res) => {
  db.user.findOne({
    where: {
      name: currentUser.name
    }
  }).then(foundUser => {
  db.menu.create({
    name: req.body.name,
  }).then((newMenu) => {
    console.log('You created a new menu called', newMenu.name)
    res.render('./adulting101/new')
  }).catch((error) => 
  console.log(error)
  )
  })
}))