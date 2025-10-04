const express = require('express');
const studentRouter = express.Router();

// Student Route-level middleware
studentRouter.use((req, res, next) => {
    console.log('Student Route Accessed');
    next();
});


studentRouter.get('/', (req, res) => {
    res.send('<h1>Student Home Page</h1>');   
});

studentRouter.get('/list', (req, res) => {
    res.send('<h1>Student List</h1>');   
});

studentRouter.post('/add', (req, res) => {
    res.send('<h1>Add Student</h1>');   
});

studentRouter.delete('/delete/:id', (req, res) => {
    const{id} = req.params;
    res.send('<h1>Delete Student</h1>');   
});

studentRouter.put('/update/:id', (req, res) => {
    const{id} = req.params;
    res.send('<h1>Update Student</h1>');   
});

studentRouter.get('/error', (req, res) => {
    throw new Error('Simulated student route error');
});

studentRouter.use((err, req, res, next) => {
    console.log("Student Route Error handling middleware called", err.message);
    res.status(500).send('Something broke in Student Route!');
});
module.exports = studentRouter;