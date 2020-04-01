const axios = require('axios');
const handlebars = require('handlebars');
const moment = require('moment');

// https://services-api.ryanair.com/farfnd/3/oneWayFares?&departureAirportIataCode=BHX&language=en&limit=16&market=en-gb&offset=0&outboundDepartureDateFrom=2019-02-11&outboundDepartureDateTo=2019-10-28&priceValueTo=150

const baseUrl = 'https://services-api.ryanair.com/farfnd/3/oneWayFares';
const dateFormat = 'YYYY-MM-DD';
const today = moment().format(dateFormat);
const endDate = moment().add(3, 'months').format(dateFormat);

handlebars.registerHelper('formatDate', function(dateString) {
    return new handlebars.SafeString(
        moment(dateString).format("DD-MM-YYYY HH:mm")
    );
});

const select = document.getElementById('airportIATACode');

select.addEventListener('change', function() {
    axios.get(baseUrl, {
        params: {
            language: 'en',
            offset: 0,
            departureAirportIataCode: this.value,
            limit: 36,
            market: 'en-gb',
            outboundDepartureDateFrom: today,
            outboundDepartureDateTo: endDate,
            priceValueTo: '150',
        }
    })
    .then(function (response) {
        console.log(response.data.fares);
        let data = response.data;
        let target = document.getElementById('target');
        let source = document.getElementById('template').innerHTML;
        let template = handlebars.compile(source);

        target.innerHTML = template(data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
});
