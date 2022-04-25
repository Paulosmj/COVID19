/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
const path = 'http://coronavirus-19-api.herokuapp.com/countries';

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
        .then((response) => response.json())
        .catch(function (err) {
            console.error('Failed retrieving information', err);
        })
}

export default {
    getCountry
}