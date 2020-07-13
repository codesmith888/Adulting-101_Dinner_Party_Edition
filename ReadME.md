# **Adulting 101: Dinner Party Edition**
<p> Have a dinner party and don’t know what to cook? WELCOME TO ADULTING! You don’t have time to go to the store because adulting is HARD, so type in a few ingredients you already have in the kitchen and we will provide you with a full menu (appetizers, mains, sides, & dessert). </p>

## About the App
<p> This is a full-stack web application created using Nodejs. Users can choose ingredients they would like to use from home in order to create custom menus. The application uses the RecipePuppy API (recipepuppy.com/about/api/) in order to pull recipes from the web. Each custom made menu includes the name of the recipe, an image and a link to the external site where the recipe is hosted. Users can favorite recipes and menus, as well as edit recipe names and menu names. Enjoy! </p>

## URL
<a>https://adulting101-dinnerpartyedition.herokuapp.com/</a>

## The WireFrames
<ul>
  <img src="adulting101/public/images/firstWireframe.jpg">
</ul>

## Approach Taken
<ul>
  <li>Created with Nodejs using Express, ExpressEJS Layouts and Bootstrap for styling</li>
  <li>RecipePuppy API used to find recipes based on ingredient preferences(recipepuppy.com/about/api)</li>
  <li>RESTful routes planned and completed.</li>
  <li>
    <a href=https://trello.com/b/sYD7njMG/p2>
  </li>
  <li>
    <a href=https://app.lucidchart.com/invitations/accept/1271ba3f-084e-4910-88c0-78c8183041ac>
  </li>

## MVP List
<ul>
  <li>As a user, I want to be able to login to my account. **COMPLETED**</li>
  <li>As a user, I want to get a recipe for a starter, a main dish, a side and a dessert that go together and save them as a menu. **COMPLETED**</li>
  <li>As a user, I want to be able to save recipes that I love. **COMPLETED**</li>
  <li>As a  user, I want to be able to input ingredients I have at home and have those included in my recipes. **COMPLETED**</li>
  <li>As a user, I want to be able to view my menu on a single page. **COMPLETED**</li>
  <li>As a user, I want to be able to look up ideas for recipes. **COMPLETED**</li>
  <li>As a user, I want to be ablet o look at menus I have previously saved. **COMPLETED**</li>
  <li>Have complete RESTful routes. **COMPLETED**</li>
  <li>Utilize an ORM to create a database and table structure. **COMPLETED**</li>
  <li>Include a ReadME file **COMPLETED**</li>
  <li>Be deployed online. **COMPLETED**</li>
  <li>Have at least two models. **COMPLETED**</li>
  <li>Include sign up/login capabilities **COMPLETED**</li>
</ul>

## Stretch Goals
<ul>
  <li>As a user, I want the app to be mobile friendly **COMPLETED**</li>
  <li>As a user, I want to be able to pick a theme for the evening (ex Italian food, etc) --requires use of join table</li>
  <li>As a user, I want to be able to exclude ingredients or include dietary restrictions</li>
  <li>As a user, I want to be able to save recipes to categories (ex appetizer, main, etc) -- requires use of join table</li>
  <li>As a user, I want to be able to choose cocktails (use of a second API)</li>
  <li>As a user, I want a shopping list telling me what to buy at the store</li>
  <li>As a user, I want a game recommendation based on how many people I am having over. (use of another API)</li>
  <li>As a user, I want to be able to input ingredients for cocktails I can make.</li>
  <li>As a user, I want to be able to exclude ingredients or include dietary restrictions</li>
</ul>

## Tech Being Used 
<ul>
  <li>Nodejs</li>
    <li>Axios</li>
    <li>Bcrypt</li>
    <li>Bootstrap</li>
    <li>Connect-flash</li>
    <li>Connect Session Sequelize</li>
    <li>DotENV</li>
    <li>Flash</li>
    <li>helmet</li>
    <li>Method-override</li>
    <li>Morgan</li>
    <li>Passport</li>
    <li>Passport-local</li>
    <li>PG</li>
    <li>Sequelize</li>
    <li>Sequelize-CLI</li>
  <li>Express</li>
  <li>ExpressEJS Layouts</li>
  <li>Javascript</li>
  <li>CSS</li>
</ul>


## Credits/Help:
<ul>
  <li>https://stackoverflow.com/questions/29860599/how-to-open-link-in-popup-box</li>
  <li>https://www.w3schools.com/howto/howto_css_modals.asp</li>
  <li>https://www.w3schools.com/html/html_iframe.asp</li>
  <li>https://mdbootstrap.com/plugins/jquery/iframe/</li>
  <li>https://stackoverflow.com/questions/31685402/iframe-not-working-on-heroku</li>
  <li>https://www.w3schools.com/jsref/jsref_replace.asp</li>
  <li>https://www.w3schools.com/jsref/jsref_includes.asp</li>
</ul>