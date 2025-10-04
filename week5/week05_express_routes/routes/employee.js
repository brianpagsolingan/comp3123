const express = require('express');
const employeeRouter = express.Router();

// Student Route-level middleware
employeeRouter.use((req, res, next) => {
    console.log('Employee Route Accessed');
    next();
});


employeeRouter.get('/', (req, res) => {
    res.send('<h1>Employee Home Page</h1>');   
});

employeeRouter.get('/list', (req, res) => {
    res.send('<h1>Employee List</h1>');   
});

employeeRouter.post('/add', (req, res) => {
    res.send('<h1>Add Employee</h1>');   
});

employeeRouter.delete('/delete/:id', (req, res) => {
    res.send('<h1>Delete Employee</h1>');   
});

employeeRouter.put('/update/:id', (req, res) => {
    res.send('<h1>Update Employee</h1>');   
});

employeeRouter.get('/error', (req, res) => {
    throw new Error('Simulated employee route error');
});
employeeRouter.use((err, req, res, next) => {
    console.log("Employee Route Error handling middleware called", err.message);
    res.status(500).send('Something broke in Employee Route!');
});
module.exports = employeeRouter;