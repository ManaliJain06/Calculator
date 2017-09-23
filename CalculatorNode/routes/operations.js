/**
 * Created by ManaliJain on 9/19/17.
 */
// var express = require('express');
// var router = express.Router();


function checkErrors(err, result, res) {
    if (err) {
        res.end('An error occurred');
        console.log(err);
    } else {
        res.end(result);
    }
}

exports.calculatorPage = function (req, res) {
    res.render('calculator.ejs', function (err, result) {
        checkErrors(err, result, res);
    });
};

// router.post('/add', function (req, res) {
//     console.log("req", req.body)
//     var sum = (Number)(req.body.data.param1) + (Number)(req.body.data.param2);
//     console.log("Sum", sum);
//     var jsonResponse = {
//         "statusCode": 200,
//         "data": sum
//     };
//     console.log("JSON", jsonResponse);
//     res.send(jsonResponse);
//     console.log("JSON 2", jsonResponse);
// });

exports.addition = function(req,res) {
    let jsonResponse = {};
    try {
        let sum = (Number)(req.body.data.param1) + (Number)(req.body.data.param2);
         jsonResponse = {
            "statusCode": 200,
            "result": sum
        };
    }  catch(err){

        jsonResponse = {
            "statusCode": 400,
            "result": "Error"
        };
    }
    res.send(jsonResponse);
};

exports.substract = function(req,res) {
    let jsonResponse = {};
    try {
        let substract = (Number)(req.body.data.param1) - (Number)(req.body.data.param2);
         jsonResponse = {
            "statusCode": 200,
            "result": substract
        };
    } catch(err){

         jsonResponse = {
            "statusCode": 400,
            "result": "Error"
        };
    }
    res.send(jsonResponse);
};

exports.multiply = function(req,res) {
    let jsonResponse = {};
    try {
        let multiply = (Number)(req.body.data.param1) * (Number)(req.body.data.param2);
        jsonResponse = {
            "statusCode": 200,
            "result": multiply
        };
    } catch(err){

        jsonResponse = {
            "statusCode": 400,
            "result": "Error"
        };
    }
    res.send(jsonResponse);
};

exports.divide = function(req,res) {
    var param1 = (Number)(req.body.data.param1);
    var param2 = (Number)(req.body.data.param2);

    //Handle for not a number as-- .8 is not handled here... make it 0.8 and send it in json
    // if(NaN(param1)){
    //     res.send({
    //         statusCode: 200,
    //         result: "Not a Number"
    //     });
    // }
    let jsonResponse = {};
    try {
        if (param2 === 0) {
            jsonResponse = {
                "statusCode": 200,
                "result": "Infinity: Cannot divide by zero"
            };
        }
        else {
            let divide = param1 / param2;
            jsonResponse = {
                "statusCode": 200,
                "result": divide
            };
        }
    } catch(err) {
        jsonResponse = {
            "statusCode": 400,
            "result": "error"
        };
    }
    res.send(jsonResponse);
};

// module.exports = router;