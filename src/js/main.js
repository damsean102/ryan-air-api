const Vue = require('vue');
const axios = require('axios');
const moment = require('moment');

// https://services-api.ryanair.com/farfnd/3/oneWayFares?&departureAirportIataCode=BHX&language=en&limit=16&market=en-gb&offset=0&outboundDepartureDateFrom=2019-02-11&outboundDepartureDateTo=2019-10-28&priceValueTo=150

const baseUrl = 'https://services-api.ryanair.com/farfnd/3/oneWayFares';
const dateFormat = 'YYYY-MM-DD';
const today = moment().format(dateFormat);
const endDate = moment().add(3, 'months').format(dateFormat);


console.warn('Yes Balteg, its using Vue https://ronniewaffle.xyz/src/js/main.js');


var app = new Vue({
    el: '#root',
    data: {
        fares: null,
        loading: false,
        airports: [
            {
                name: 'Aberdeen',
                iataCode: 'ABZ',
            },
            {
                name: 'Belfast International',
                iataCode: 'BFS',
            },
            {
                name: 'Birmingham',
                iataCode: 'BHX',
            },
            {
                name: 'Bournemouth',
                iataCode: 'BOH',
            },
            {
                name: 'Bristol',
                iataCode: 'BRS',
            },
            {
                name: 'Cardiff',
                iataCode: 'CWL',
            },
            {
                name: 'Derry',
                iataCode: 'LDY',
            },
            {
                name: 'East Midlands',
                iataCode: 'EMA',
            },
            {
                name: 'Edinburgh',
                iataCode: 'EDI',
            },
            {
                name: 'Exeter',
                iataCode: 'EXT',
            },
            {
                name: 'Glasgow',
                iataCode: 'GLA',
            },
            {
                name: 'Glasgow Prestwick',
                iataCode: 'PIK',
            },
            {
                name: 'Leeds Bradford',
                iataCode: 'LBA',
            },
            {
                name: 'Liverpool',
                iataCode: 'LPL',
            },
            {
                name: 'London Gatwick',
                iataCode: 'LGW',
            },
            {
                name: 'London Luton',
                iataCode: 'LTN',
            },
            {
                name: 'London Southend',
                iataCode: 'SEN',
            },
            {
                name: 'London Stansted',
                iataCode: 'STN',
            },
            {
                name: 'Manchester',
                iataCode: 'MAN',
            },
            {
                name: 'Newcastle',
                iataCode: 'NCL',
            },
            {
                name: 'Newquay Cornwall',
                iataCode: 'NQY',
            },
        ]
    },
    methods: {
        getFares(event) {

            this.loading = true,

            axios
            .get(baseUrl, {
                params: {
                    language: 'en',
                    offset: 0,
                    departureAirportIataCode: event.target.value,
                    limit: 36,
                    market: 'en-gb',
                    outboundDepartureDateFrom: today,
                    outboundDepartureDateTo: endDate,
                    priceValueTo: '150',
                }
            })
            .then(response => (
                this.fares = response.data.fares
            ))
            .catch(error => console.error(error))
            .finally(() => this.loading = false)
        }
    },
    filters: {
        formatDate(value) {
            return moment(value).format('DD MMM YYYY - HH:mm')
        }
    }
});
