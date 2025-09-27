const express = require('express');

const SERVER_PORT = process.env.PORT || 3005;

// create an express app
const app = express();

// serve static files from the "public" directory
// app.use(express.static('public'));
app.use('/static', express.static('public'));

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true })); 

//htt[p://localhost:3005/]
app.get('/', (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send('Hello world!');
});

// http://localhost:3005/index
// app.get('/index', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// http://localhost:3005/about
app.get('/about', (req, res) => {
    res.set("Content-Type", "text/html");
    res.status(200);
    res.send('<h1>About page</h1><p>This is the about page</p>');
});

// http://localhost:3005/students
app.get('/students', (req, res) => {
    const student = {
        method: "GET",
        id: 1,
        name: 'John Doe',
        age: 20
    };
    res.type('application/json');
    res.json(student);
});

// http://localhost:3005/students
app.post('/students', (req, res) => {
    const student = {
        method: "POST",
        id: 1,
        name: 'John Doe',
        age: 20
    };
    res.type('application/json');
    res.json(student);
});

// http://localhost:3005/students
app.put('/students', (req, res) => {
    const student = {
        method: "PUT",
        id: 1,
        name: 'John Doe',
        age: 20
    };
    res.type('application/json');
    res.json(student);
});

// http://localhost:3005/students
app.delete('/students', (req, res) => {
    const student = {
        method: "DELETE",
        id: 1,
        name: 'John Doe',
        age: 20
    };
    res.type('application/json');
    res.json(student);
});
// app.listen(SERVER_PORT, () => { 
//     console.log("Server started on port ${SERVER_PORT}");
// });

//Query Parameters
//http://localhost:3005/employee?name=John&age=22
app.get('/employee', (req, res) => {
    console.log(req.query);
   
    if(req.query.name === undefined || req.query.age === undefined) {
        res.status(400);
        return res.send({status: false, message: "Bad Request: name and age are required"});
    }
    // const {name, age} = req.query;
    //or
    const name = req.query.name;
    const age = req.query.age;

    res.type('application/json');
    res.json({ status: true ,data:{name: name, age: age }});
});
//Path or Route Parameters
//http://localhost:3005/employee/Brian/51/TOR
app.get('/employee/:name/:age/:city', (req, res) => {
    console.log(req.params);
    
    //Valiadate
    if(req.params.name === undefined || req.params.age === undefined || req.params.city === undefined) {
        res.status(400);
        return res.send({status: false, message: "Bad Request: name, age and city are required"});
    }
    
    const {name, age, city} = req.params;
    res.type('application/json');
    res.json({ name: name, age: age, city: city });
});

// Body Parameters
//{"name": "Brian", "age": 51, "city": "TOR"}
app.use(express.json()); 
// http://localhost:3005/employee
app.post('/employee', (req, res) => {
    console.log(req.body);
    res.type('application/json');
    res.json({ status: true, data: req.body });
});

const server = app.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`);
    console.log(server.address());
});
