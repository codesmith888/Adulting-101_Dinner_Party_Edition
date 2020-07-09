var express = require('express');
const db = require('../models');
var router = express.Router();
const axios = require('axios');
let newMenu =

router.post('/createMenu', ((req, res) => {
  db.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(foundUser => {
    db.menu.create({
      name: req.body.menuName,
  }).then(newMenu => {
    foundUser.addMenu(newMenu)
    console.log(`You created a new menu called ${newMenu.name}`)
  }).then(relationInfo => {
    res.render('adulting101/newMenu')
  }).catch((error) => 
  console.log(error)
  )
  })
}))

router.post('/newMenu', ((req, res) => {
  let appetizerUrl = `http://www.recipepuppy.com/api/?q=appetizer&i=${req.body.app_ingredients}`
  axios.get(appetizerUrl).then((apiResponse) => {
    let appetizerOptions = apiResponse.data
    if (appetizerOptions.thumbnail = "") {
      appetizerOptions.splice
    }
    let mainUrl = `http://www.recipepuppy.com/api/?&i=${req.body.main_ingredients}`
    axios.get(mainUrl).then((apiResponse) => {
      let mainOptions = apiResponse.data
      let sideUrl =  `http://www.recipepuppy.com/api/?q=side&i=${req.body.side_ingredients}`
      axios.get(sideUrl).then((apiResponse) => {
        let sideOptions = apiResponse.data
        let dessertUrl = `http://www.recipepuppy.com/api/?q=dessert&i=${req.body.dessert_ingredients}`
        axios.get(dessertUrl).then((apiResponse) => {
          let dessertOptions = apiResponse.data
          res.render('adulting101/choose', {dessert: dessertOptions, appetizer: appetizerOptions, main: mainOptions, side: sideOptions})
        }).catch((error) => {
          console.log(error)
        })
      })
    })
  })
}));

router.get('/newMenu', ((req, res) => {
  res.render('./adulting101/newMenu')
}))

router.post('/menu', ((req, res) => {
  db.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(foundUser => {
    db.menu.create({
      name: req.body.menuName,
      appetizer: req.body.appetizerInfo,
      main: req.body.mainCourseInfo,
      side: req.body.sideDishInfo,
      dessert: req.body.dessertInfo
  }).then(newMenu => {
    foundUser.addMenu(newMenu)
    console.log(`You created a new menu called ${newMenu.name}`)
    let menuItems = JSON.stringify(newMenu)
    let menuData = JSON.parse(menuItems)
    let appetizer = menuData.appetizer
    let appetizerData = appetizer.split("|")
    let main = menuData.main
    let mainCourseData = main.split("|")
    let side = menuData.side
    let sideData = side.split("|")
    let dessert = menuData.dessert
    let dessertData = dessert.split("|")
    res.render('adulting101/menu', {currentAppetizer: appetizerData, currentMain: mainCourseData, currentSide: sideData, currentDessert: dessertData})
  }).catch((error) => 
  console.log(error)
  )
  })
}))

//--------------THIS ROUTE BELOW WORKS----------//
// router.post('/menu', ((req, res) => {
//   console.log(req.body)
//   db.user.findOne({
//     where: {
//       id: req.user.id
//     }
//   }).then(foundUser => {
//     db.menu.create({
//       name: req.body.menuName,
//       appetizer: req.body.appetizerInfo,
//       main: req.body.mainCourseInfo,
//       side: req.body.sideDishInfo,
//       dessert: req.body.dessertInfo
//     }).then(newMenu => {
//       foundUser.addMenu(newMenu)
//       console.log(`You created a new menu called ${newMenu.name}`)
//     }).then(relationInfo => {
//       let chosenAppetizer = req.body.appetizerInfo
//       let chosenMain = req.body.mainCourseInfo
//       let chosenSide = req.body.sideDishInfo
//       let chosenDessert = req.body.dessertInfo
//       res.render('adulting101/menu', {appetizer: chosenAppetizer, main: chosenMain, side: chosenSide, dessert: chosenDessert})
//     }).catch((error) => 
//       console.log(error)
//     )
//   })
// }))


// router.get('/newMain', ((req, res) => {
//   res.render('./adulting101/newMain')
// }))

// router.post('/newMain', ((req, res) => {
//   let recipeUrl = `http://www.recipepuppy.com/api/?i=${req.body.main_ingredients}`
//   axios.get(recipeUrl).then((apiResponse) => {
//     let mainCourseOptions = apiResponse.data
//     res.render('adulting101/maincourse', {mainCourse: mainCourseOptions})
//   }).catch((error) => 
//   console.log(error)
//   )
//   }))

module.exports = router;