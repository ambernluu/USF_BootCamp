const express = require('express');
const app = express();
const ExpressError = require('./expressError')
const convertAndValidateNumsArray = require('./helpers');
const { mean, median, mode } = require('mathjs');

app.get('/add', (req, res) => {
    console.log(req.query.nums);
})

app.get('/mean', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');

    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: mean(nums)
    }

    return res.send(result);
});

app.get('/median', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');

    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: median(nums)
    }

    return res.send(result);
});

app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');

    // check if anything bad was put in
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: mode(nums)
    }

    return res.send(result);
});
app.listen(3000, () => {
    console.log("Server running on port 3000")
});

