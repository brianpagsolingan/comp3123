const express = require('express');

const SERVER_PORT = process.env.PORT || 3007;

const app = express();
app.use('/static', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://localhost:3007/hello
app.get('/hello', (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send('Hello Express! JS');
});

// http://localhost:3007/user?name=John&lastname=Doe
app.get('/user', (req, res) => {
    
    const name = req.query.name || "Pritesh";
    const lastname = req.query.lastname || "Patel";
    res.type("application/json");
    res.send({ name: name, lastname: lastname });
});

// http://localhost:3007/user/John/Doe
app.post('/user/:name/:lastname', (req, res) => {
    const name = req.params.name;
    const lastname = req.params.lastname;
    res.type("application/json");
    res.send({ name: name, lastname: lastname });
});

app.post('/users', (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];
    res.json(users)
});

const server = app.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`);
    console.log(server.address());
});
