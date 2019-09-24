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


<script id="template" type="x-tmpl-mustache">
    <div class="wrapper">
        {{#fares}}
            <div class="block rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{outbound.arrivalAirport.name}} - {{outbound.arrivalAirport.countryName}}</div>
                    <p class="text-gray-700 text-base">{{outbound.price.currencySymbol}}{{outbound.price.value}}</p>
                    <p class="text-gray-700 text-base"><strong>Depart:</strong> {{outbound.departureDate}} - <strong>Arrive:</strong> {{outbound.arrivalDate}}
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

<script src="assets/js/main.js"></script>

</body>
</html>
