const axios = require('axios');
const moment = require('moment');

// https://services-api.ryanair.com/farfnd/3/oneWayFares?&departureAirportIataCode=BHX&language=en&limit=16&market=en-gb&offset=0&outboundDepartureDateFrom=2019-02-11&outboundDepartureDateTo=2019-10-28&priceValueTo=150

const baseUrl = 'https://services-api.ryanair.com/farfnd/3/oneWayFares';
const dateFormat = 'YYYY-MM-DD';
const today = moment().format(dateFormat);
const endDate = moment().add(3, 'months').format(dateFormat);


var app = new Vue({
    el: '#root',
    data: {
        fares: null,
        loading: false,
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
                this.fares = response.data.fares,
                console.log(response.data.fares)
            ))
            .catch(error => console.log(error))
            .finally(() => this.loading = false)
        }
    }
});


new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          this.info = response.data.bpi
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  })
