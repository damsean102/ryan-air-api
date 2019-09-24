<!DOCTYPE HTML>
<html>
<head>

<title>Ryan Air API</title>

<link rel="stylesheet" href="assets/css/main.css">

</head>
<body>

<div class="wrapper">
    <h1 class="text-4xl">Ryan Air API</h1>
</div>

<div id="target">Loading...</div>


<script id="template" type="text/x-handlebars-template">
    <div class="wrapper">
        {{#fares}}
            <div class="block rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <p class="text-gray-700 text-base">Flight No. {{outbound.flightNumber}}</p>
                    <p class="font-bold text-xl mb-2">From: {{outbound.departureAirport.name}}, {{outbound.departureAirport.countryName}} ({{outbound.departureAirport.iataCode}}) - To:
                    {{outbound.arrivalAirport.name}} - {{outbound.arrivalAirport.countryName}} ({{outbound.arrivalAirport.iataCode}})</p>
                    <p class="text-gray-700 text-base">
                    {{outbound.price.currencySymbol}}{{outbound.price.value}}
                    {{#if outbound.previousPrice}}
                        <span class="text-sm">(Previously - {{outbound.previousPrice.currencySymbol}}{{outbound.previousPrice.value}})</span>
                    {{/if}}
                    <br/>
                    {{#if outbound.priceUpdated}}
                        <span class="text-xs">Last updated at: {{formatDate outbound.priceUpdated}}</span>
                    {{/if}}
                    </p>
                    <p class="text-gray-700 text-base"><strong>Depart:</strong> {{formatDate outbound.departureDate}} - <strong>Arrive:</strong> {{formatDate outbound.arrivalDate}}
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                </div>
            </div>
        {{/fares}}
    </div>
</script>


Ryanair flies in the UK from:
Aberdeen, Belfast International, Birmingham, Bournemouth, Bristol, Cardiff, Derry, East Midlands, Edinburgh, Glasgow, Leeds Bradford, Liverpool, London Gatwick, London Luton, London Stansted, Manchester, Newcastle and Newquay Cornwall.

<script src="assets/js/main.js"></script>

</body>
</html>
