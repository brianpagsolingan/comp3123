const express = require('express');
const routerUser = express.Router();
const userData = require('../user.json');

/*
- Return all details from user.json file to client as JSON format
*/

routerUser.get('/profile', (req,res) => {
  res.send(userData);
});



/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req,res) => {
  const {username, password} = req.body;
  if(username !== userData.username) {
    res.json({
      status: false,
      message: "User Name is invalid"
    });
  } else if(password !== userData.password) {
    res.json({
      status: false,
      message: "Password is invalid"
    });
  } else {
    res.json({
      status: true,
      message: "User is valid"
    });
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:user', (req,res) => {
  const user = req.params.user;
  res.send(`<b>User ${user} successfully logout.<b>`);
});

module.exports = routerUser;