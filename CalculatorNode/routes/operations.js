/**
 * Created by ManaliJain on 9/19/17.
 */

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

    let jsonResponse = {};
    try {
        if (param2 === 0) {
            jsonResponse = {
                "statusCode": 200,
                "result": "Infinity:Can't divide by zero"
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
