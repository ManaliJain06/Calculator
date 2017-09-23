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

export const multiplication = (payload) => fetch(`${api}/multiply`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
}).then(res => {
    return res;
}).catch(error => {
    console.log("This is error");
    return error;
});

export const division = (payload) => fetch(`${api}/divide`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
}).then(res => {
    return res;
}).catch(error => {
    console.log("This is error");
    return error;
});