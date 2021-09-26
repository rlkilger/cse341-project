//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['John', 'Sarah', 'Peter'];
let message = "";

router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
  const index = users.indexOf(newUser);
  if (index > -1) {
    message = "Error: That name already exists.";
    console.log("Name already exists");
  } else {
    users.push(newUser);
    message = "";
  }
  res.redirect('/ta02/');
});


router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
  const index = users.indexOf(removeUser);
  if (index !== -1) {
    users.splice(index, 1);
    message = "";
  } else {
    message = "Error: Name was not found.";
    console.log("Name not found");
  }
    res.redirect('/ta02/');
});


router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    message: message,
  });
});


module.exports = router;
