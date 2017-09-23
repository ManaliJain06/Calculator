/**
 * Created by ManaliJain on 9/19/17.
 */
const axios = require("axios")
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'


export const addition = (payload) => {
    console.log("payload", payload)
    return axios.post('http://localhost:3001/add', {data: payload }
    )
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        console.log(error);
        return error
    });
};

export const  substraction = (payload) => {
    console.log("payload", payload)
    return axios.post('http://localhost:3001/substract', {data: payload }
    )
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        console.log(error);
        return error
    });
};

export const multiplication = (payload) => {
    console.log("payload", payload)
    return axios.post('http://localhost:3001/multiply', {data: payload }
    )
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        console.log(error);
        return error
    });
};

export const division = (payload) => {
    console.log("payload", payload)
    return axios.post('http://localhost:3001/divide', {data: payload }
    )
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
            return error
        });
};