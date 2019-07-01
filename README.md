# Burger App
This application is used to demonstrate the usage of handlebars in order to populate the page with data from a database, add to that database from the page, and move data from one section of the page to another.  The app allows a user to enter in a burger that he/she would like to eat.  When a user submits a burger, that burger is then added to a MySQL database table that holds data entries on the burgers that have not been eaten yet and in turn sends this data to the page to be displayed on the left side of the page.  Each burger displayed has a button called "devour-it" that, when clicked, will delete that burger's entry from the "not-eaten" table and add it to a separate table that contains the burgers that have already been eaten.  The app then uses handlebars to populate the right side of the page with the "eaten" table data entries.  The app stores every burger wether devoured or not within a mysql database.


## Technologies used:
* HTML
* CSS
* Javascript
* Express Node Framework
* Path Node Framework
* express-handlebars NPM package
* MYSQL
* MYSQL NPM package
* Express
* Node.js

### Deployed on Heroku: [Eat-da-Burger](https://pacific-spire-19292.herokuapp.com/index)