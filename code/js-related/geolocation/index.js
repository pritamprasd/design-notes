fetch("../../env.json")
    .then(response => response.json())
    .then(response => {
        makeGeoLocationCalls();
        return response;
    })
    .then(response => {
        console.log("~~~~~~~~~~~~~~~~~~~~~~")
        console.error(currentLat)
        fetch('https: //maps.googleapis.com/maps/api/js?key=' +
                response[0]['MAP_API_KEY'] +
                '&callback=initMap&libraries=&v=weekly')
            .then(console.log('Map api call passed'))
    })
    .catch(function(err) {
        console.log(`Error: ${err}`)
    });

let env = {}

let map;
let currentLat = 0.0;
let currentLng = 0.0

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: currentLan, lng: currentLng },
        zoom: 8,
    });
}

function makeGeoLocationCalls() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            var eventList = document.getElementById("event-list")
            var message = "";
            var coordinates = position.coords;
            console.table(coordinates)
            var message = [
                `${new Date()}`,
                'Your current position is:',
                `Latitude : ${coordinates.latitude}`,
                `Longitude: ${coordinates.longitude}`,
                `More or less ${coordinates.accuracy} meters.`
            ]
            message.map(text => {
                var itemValue = document.createTextNode(text);
                var newListItem = document.createElement("li")
                newListItem.appendChild(itemValue)
                eventList.appendChild(newListItem)
            })

            currentLat = coordinates.latitude;
            currentLng = coordinates.longitude;
        },
        function(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
    );

    // Will call the first function each time the position of the device changes
    const watchId = navigator.geolocation.watchPosition(
        function(positions) {

            var coordinates = position.coordinates;
            console.log("Your current position is:");
            console.log(`Latitude : ${coordinates.latitude}`);
            console.log(`Longitude: ${coordinates.longitude}`);
            console.log(`More or less ${coordinates.accuracy} meters.`);
        },
        function(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
    );
    navigator.geolocation.clearWatch(watchId);
}