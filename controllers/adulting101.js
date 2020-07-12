var express = require('express');
const db = require('../models');
var router = express.Router();
const axios = require('axios');
let createNewMenu =

router.get('/createNewMenu', ((req, res) => {
  res.render('adulting101/createNewMenu', {bodyId: 'createNewMenu'})
}))

router.post('/createNewMenu', ((req, res) => {
  let appetizerUrl = `http://www.recipepuppy.com/api/?q=appetizer&i=${req.body.app_ingredients}`
  axios.get(appetizerUrl).then((apiResponse) => {
    let apiResults = apiResponse.data.results
    let appetizerOptions = apiResults.filter((result) => {
      return result.thumbnail !== ""
    })
    let mainUrl = `http://www.recipepuppy.com/api/?&i=${req.body.main_ingredients}`
    axios.get(mainUrl).then((apiResponse) => {
      let apiMainResults = apiResponse.data.results
      let mainOptions = apiMainResults.filter((result) => {
        return result.thumbnail !== ""
      })
      let sideUrl =  `http://www.recipepuppy.com/api/?q=side&i=${req.body.side_ingredients}`
      axios.get(sideUrl).then((apiResponse) => {
        let apiSideResults = apiResponse.data.results
        let sideOptions = apiSideResults.filter((result) => {
          return result.thumbnail !== ""
        })
        let dessertUrl = `http://www.recipepuppy.com/api/?q=dessert&i=${req.body.dessert_ingredients}`
        axios.get(dessertUrl).then((apiResponse) => {
          let apiDessertResults = apiResponse.data.results
          let dessertOptions = apiDessertResults.filter((result) => {
            return result.thumbnail !== ""
          })
          res.render('adulting101/choose', {dessert: dessertOptions, appetizer: appetizerOptions, main: mainOptions, side: sideOptions, bodyId: 'choose'})
        }).catch((error) => {
          console.log(error)
        })
      })
    })
  })
}));


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
    let menuName = menuData.menuName
    let appetizer = menuData.appetizer
    let appetizerData = appetizer.split("|")
    let main = menuData.main
    let mainCourseData = main.split("|")
    let side = menuData.side
    let sideData = side.split("|")
    let dessert = menuData.dessert
    let dessertData = dessert.split("|")
    res.render('adulting101/menu', {currentMenu: menuName, currentAppetizer: appetizerData, currentMain: mainCourseData, currentSide: sideData, currentDessert: dessertData, bodyId: 'menu'})
  }).catch((error) => 
  console.log(error)
  )})
}));

router.get('/allmenus', ((req, res) => {
  db.menu.findAll({
    where: {
      userId: req.user.id,
    }
  }).then((menus) => {
    let menuList = JSON.stringify(menus);
    let menuData = JSON.parse(menuList)
    res.render('adulting101/allmenus', {allMenus: menuData, bodyId: "allMenus"})
  }).catch((error) => {
    console.log(error)
  })
}));

router.get('/favorites', ((req, res) => {
  db.favorite.findAll({
    where: {
      userId: req.user.id
    }
  }).then((favorites) => {
    let favoriteList = JSON.stringify(favorites);
    let favoriteData = JSON.parse(favoriteList)
    res.render('adulting101/favorites', {allFavorites: favoriteData, bodyId: "favorites"})
  }).catch((error) => {
    console.log(error)
  })
}));

router.get('./profile', ((req, res) => {
  res.render('./profile', {bodyId: "profile"})
}));

router.get('')

router.get('/:id', ((req, res) => {
  db.menu.findOne({
    where: {
      id: req.params.id, 
    }
  }).then((foundMenu) => {
    let thisMenu = JSON.stringify(foundMenu);
    let thisMenuData = JSON.parse(thisMenu)
    let appetizer = thisMenuData.appetizer
    let main = thisMenuData.main
    let side = thisMenuData.side
    let dessert = thisMenuData.dessert
    let appetizerData = appetizer.split("|")
    let mainCourseData = main.split("|")
    let sideData = side.split("|")
    let dessertData = dessert.split("|")
    res.render('adulting101/menuDetails', {menu: thisMenuData, appetizer: appetizerData, main: mainCourseData, side: sideData, dessert: dessertData, bodyId: 'menu'})
  }).catch((error) => 
  console.log(error)
  )
}))

router.delete('/:id', (req, res) => {
  db.menu.destroy({
    where: {
      id: req.params.id
    }
  }).then(deleted => {
    console.log("See you later alligator. In a while crocodile.")
    res.redirect('/profile', {bodyId: "profile"})
  }).catch((error) => 
  console.log(error)
)});

router.post('/favorites', ((req, res) => {
  db.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(foundUser => {
    let recipeData = req.body.favoriteInfo;
    let recipeDataSplit = recipeData.split("|");
    let recipeName = recipeDataSplit[0];
    console.log(recipeName)
    let recipeURL = recipeDataSplit[1];
    console.log(recipeURL)
    let recipeImage = recipeDataSplit[2];
    console.log(recipeImage)
    db.favorite.create({
        name: recipeName,
        url: recipeURL,
        thumbnail: recipeImage
  }).then(favoriteRecipe => {
    foundUser.addFavorite(favoriteRecipe)
    res.render('./profile', {bodyId: "profile"})
  }).catch((error) => 
  console.log(error)
  )
  })
  })
)

router.put('/:id', ((req, res) => {
  db.menu.update({
    name: req.body.name
  }, {
    where: {
      id: req.params.id
    }
  }).then(updated => {
    console.log("You successfully updated the menu name to" + req.body.name)
    res.render('./profile', {bodyId: "profile"})
  }).catch((error) => {
    console.log(error)
  })
}))

router.get('favorites/:id', ((req, res) => {
  db.favorite.findOne({
    where: {
      id: req.params.id
    }
  }).then((foundFavorite) => {
    let thisRecipe = JSON.stringify(foundFavorite)
    let recipeData = JSON.parse(thisRecipe)
    let name = recipeData.name
    let url = recipeData.url
    let image = recipeData.thumbnail
    res.render('adulting101/recipeDetails')
  }).catch((error) => 
    console.log(error)
  )
}))

module.exports = router;
