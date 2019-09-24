const axios = require('axios');
const mustache = require('mustache');
var moment = require('moment');

// https://services-api.ryanair.com/farfnd/3/oneWayFares?&departureAirportIataCode=BHX&language=en&limit=16&market=en-gb&offset=0&outboundDepartureDateFrom=2019-02-11&outboundDepartureDateTo=2019-10-28&priceValueTo=150

const baseUrl = 'https://services-api.ryanair.com/farfnd/3/oneWayFares';
const today = moment().format('YYYY-MM-DD');
const endDate = moment().add(2, 'months').format('YYYY-MM-DD');

axios.get(baseUrl, {
    params: {
        language: 'en',
        offset: 0,
        departureAirportIataCode: 'BHX',
        limit: 16,
        market: 'en-gb',
        outboundDepartureDateFrom: today,
        outboundDepartureDateTo: endDate,
        priceValueTo: '150',
    }
})
.then(function (response) {
    // console.log(response.data.fares);
    let data = response.data;
    let target = document.getElementById('target');
    let template = document.getElementById('template').innerHTML;

    mustache.parse(template);   // optional, speeds up future uses
    target.innerHTML = mustache.render(template, data);
})
.catch(function (error) {
    console.log(error);
})
.finally(function () {
    // always executed
});
