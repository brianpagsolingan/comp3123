const express = require('express');
const app = express();
const employeeRouter = require('./routes/employee');
const studentRouter = require('./routes/student');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application-level middleware
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}' - ${new Date().toISOString()}`);
    next();

});


//Custom Routes
app.use('/api/v1/employee', employeeRouter);
app.use('/api/v1/student', studentRouter);
const SERVERPORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.get('/error', (req, res) => {
    throw new Error('Simulated server error');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.log("Error handling middleware called", err.message);
    res.status(500).send('Something broke!');
});

app.listen(SERVERPORT, () => {
    console.log(`Server running on http://localhost:${SERVERPORT}`);
});