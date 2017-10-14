/**
 * Created by ManaliJain on 9/19/17.
 */

exports.addition = function(req,res) {
    let jsonResponse = {};
    console.log("add",req.body.param1);
    console.log("add",req.body.param2);
    try {
        let sum = (Number)(req.body.param1) + (Number)(req.body.param2);
         jsonResponse = {
            "statusCode": 200,
            "result": sum
        };
        console.log("result",sum);
    }  catch(err){

        jsonResponse = {
            "statusCode": 400,
            "result": "Error"
        };
    }
    res.send(jsonResponse);
};

exports.substract = function(req,res) {
    console.log("sub",req.body.param1);
    console.log("sub",req.body.param2);
    let jsonResponse = {};
    try {
        let substract = (Number)(req.body.param1) - (Number)(req.body.param2);
         jsonResponse = {
            "statusCode": 200,
            "result": substract
        };
        console.log("result",substract);
    } catch(err){

         jsonResponse = {
            "statusCode": 400,
            "result": "Error"
        };
    }
    res.send(jsonResponse);
};

exports.multiply = function(req,res) {
    console.log("mul",req.body.param1);
    console.log("mul",req.body.param2);
    let jsonResponse = {};
    try {
        let multiply = req.body.param1 * req.body.param2;
        jsonResponse = {
            "statusCode": 200,
            "result": multiply
        };
        console.log("result",multiply);
    } catch(err){

        jsonResponse = {
            "statusCode": 400,
            "result": "Error"
        };
    }
    res.send(jsonResponse);
};

exports.divide = function(req,res) {

    console.log("div",req.body.param1);
    console.log("div",req.body.param2);
    let param1 = (Number)(req.body.param1);
    let param2 = (Number)(req.body.param2);
    let divide = 0;
    let jsonResponse = {};
    try {
        if (param2 === 0) {
            jsonResponse = {
                "statusCode": 200,
                "result": "Infinity:Can't divide by zero"
            };
        }
        else {
            divide = param1 / param2;
            jsonResponse = {
                "statusCode": 200,
                "result": divide
            };
        }
        console.log("result",divide);
    } catch(err) {
        jsonResponse = {
            "statusCode": 400,
            "result": "error"
        };
    }
    res.send(jsonResponse);
};
