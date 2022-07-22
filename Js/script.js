
const endpoint = "https://api.openweathermap.org/data/2.5/onecall"

window.onload = function () {

    gethour()
    const d = new Date()
    let hora = document.getElementById("hour").textContent = "Hora " + d.getHours() + ":" + d.getMinutes()

    navigator.geolocation.getCurrentPosition(success, error, options);
    console.log()



}

function gethour() {
    const d = new Date()
    let hour = d.getHours()
    console.log(hour)
    if (hour >= 0 & hour <= 12) {
        url = "url('../Imgs/morning.jpg')"
    }
    if (hour >= 13 & hour <= 18) {
        url = "url('../Imgs/sunset.jpg')"
    }
    if (hour >= 19 & hour <= 24) {

        url = 'url("../Imgs/nigth.jpg")'

    }
    document.getElementById("card-body").style.backgroundImage = url
}




function apicall(lat, long) {
    var links = new URL(endpoint)
    var params = { lat: lat, lon: long, appid: "3d070b4fd285e9dfa261851a42575fbe", units: "metric" }
    links.search = new URLSearchParams(params).toString();
    fetch(links)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data)
            console.log(data.current.temp)
            document.getElementById("lugar").textContent = data.timezone
            document.getElementById("grados").textContent = Math.floor(data.current.temp) + "°C"
            document.getElementById("estado").textContent = "Viento: " + Math.floor(data.current.wind_speed) + " m/s"
            document.getElementById("humedad").textContent = "Humedad: " + Math.floor(data.current.humidity) + "%"
            map(lat, long)

        })
        .catch(error => {
            console.log(error)
        })
}

function map(lat, lon) {
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat,]),
            zoom: 15
        })
    });

}


function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');


    apicall(crd.latitude, crd.longitude)
};

var options = {

    timeout: 6000,
    maximumAge: 0
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};


