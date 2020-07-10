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

// router.get('/', ((req, res) => {
//   db.user.findOne({
//     where: {
//       name: currentUser.name
//     }
//   }).then(foundUser => {
//   db.menu.create({
//     name: req.body.name,
//   }).then((newMenu) => {
//     console.log('You created a new menu called', newMenu.name)
//     res.render('./adulting101/new')
//   }).catch((error) => 
//   console.log(error)
//   )
//   })
// }))


  // db.user.findOne({
  //   where: {
  //     id: req.user.id
  //   }
  // }).then(foundUser => {
  //   user.createMenu({
  //     name: req.body.name,
  // }).then(newMenu => {
  //   console.log(`You created a new menu called HotDiggetyDogs`)
  //   // res.render('./adulting101/newAppetizer')
  // }).catch((error) => 
  // console.log(error)
  // )
  // })

//   router.post('./menu', ((req, res) => {
//     db.user.findOne({
//       where: {
//         id: 4
//       }
//     }).then(foundUser => {
//       db.menu.create({
//         name: "Hot Dog Feast",
//         appetizer: "Pigs in a Blanket",
//         main: "Chicago Dogs",
//         side: "Mac&Cheese with HotDogs & Peas",
//         dessert: "chocolate dogs"
//     }).then(newMenu => {
//       foundUser.addMenu(newMenu)
//       console.log(`You created a new menu called ${newMenu.name}`)
//     }).catch((error) => 
//     console.log(error)
//     )
//     })
//   }))

// //-----------------_TEST ONE FAIL ----------------\\\\\\
// router.post('./menu', ((req, res) => {
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
//   }).then(newMenu => {
//     foundUser.addMenu(newMenu)
//     console.log(`You created a new menu called ${newMenu.name}`)
//     let menuItems = JSON.stringify(newMenu)
//     let menuData = JSON.parse(menuItems)
//     res.render('adulting101/menu', {currentMenu: menuData})
//   }).catch((error) => 
//   console.log(error)
//   )
//   })
// }))
// //--------------------------------------------//

// router.get('/profile', ((req, res) => {
//   db.menu.findAll({
//     where: {
//       userId: req.user.id,
//     }
//   }).then((menus) => {
//     let menuList = JSON.stringify(menus);
//     let menuData = JSON.parse(menuList)
//     res.render('auth/profile', {allMenus: menuData})
//   })
// }))


//-------------------------------------

// db.menu.destroy({
//   where: {
//     id: 89
//   }
// )}.catch(error)

///------------------------------------------//
//   db.user.findOne({
//     where: {
//       id: 4
//     }
//   }).then(foundUser => {
//     db.favorite.create({
//         name: "recipeName",
//         url: "recipeURL",
//         thumbnail: "recipeImage"
//   }).then(favoriteRecipe => {
//     foundUser.addFavorite(favoriteRecipe)
//     console.log(`You added ${favoriteRecipe.name} to your Favorites list.`)
//   }).catch((error) => 
//   console.log(error)
//   )
// })

db.menu.update({
  name: "Get In My Belly"
}, {
  where: {
    id: 24
  }
})
  

  //     }).then(newMenu => {
  //       foundUser.addMenu(newMenu)
  //       console.log(`You created a new menu called ${newMenu.name}`)
  //     }).catch((error) => 
  //     console.log(error)
  //     )
  //     })
  //   }))