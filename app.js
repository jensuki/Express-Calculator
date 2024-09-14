// handle routes and responses
const express = require('express');
const { mean, median, mode } = require('./helpers');
const ExpressError = require('./expressError');

const app = express(); // intialize express app

// helper function to convert query string to #'s
function convertQueryToNums(query) {
    if (!query) {
        throw new ExpressError('nums are required', 400);
    }

    let nums = query.split(',').map(x => {
        let val = Number(x); // convert each string 'x' from query into #
        if (isNaN(val)) {
            throw new ExpressError(`${x} is not a number`, 400);
        }
        return val; // return successfully converted #
    })
    return nums; // return entire array of converted #'s
}

// route for  mean
app.get('/mean', (request, response, next) => {
    try {
        let nums = convertQueryToNums(request.query.nums) // convert query string to array of #'s
        let result = {
            operation: 'mean',
            value: mean(nums) // call mean() from helpers with converted #'s
        }
        return response.json(result); // send result as a json response
    } catch (e) {
        return next(e); // pass error to the error handlng middleware
    }
})

//route for median
app.get('/median', (request, response, next) => {
    try {
        let nums = convertQueryToNums(request.query.nums);
        let result = {
            operation: 'median',
            value: median(nums)
        }
        return response.json(result);
    } catch (e) {
        return next(e);
    }
})

//route for mode
app.get('/mode', (request, response, next) => {
    try {
        let nums = convertQueryToNums(request.query.nums);
        let result = {
            operation: 'mode',
            value: mode(nums)
        }
        return response.json(result);
    } catch (e) {
        return next(e);
    }
})

//general error handler for non-existent route {
app.use((request, response, next) => {
    const error = new ExpressError('Page Not Found', 404);
    return next(error);
})

// error handling middleware
app.use((error, request, response, next) => {
    let status = error.status || 500;
    let message = error.message;

    // send the error as a JSON response
    return response.status(status).json({
        error: { message, status }
    })
})

// start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})