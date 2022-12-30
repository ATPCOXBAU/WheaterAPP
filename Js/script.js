
const endpoint = "https://api.openweathermap.org/data/2.5/onecall"
const endpoint1 = "https://api.openweathermap.org/data/2.5/forecast"
window.onload = function () {

    gethour()
    const d = new Date()

    if (d.getMinutes() < 10) {
        mins = "0" + d.getMinutes()
    }
    else {
        mins = d.getMinutes()
    }

    document.getElementById("hour").textContent = "Hora " + d.getHours() + ":" + mins

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
    var params = { lang: "es", lat: lat, lon: long, appid: "3d070b4fd285e9dfa261851a42575fbe", units: "metric" }
    links.search = new URLSearchParams(params).toString();
    fetch(links)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data)
            console.log(data.current.temp)
            console.log(data.daily)
            mins = data.daily[0].temp.min

            document.getElementById("lugar").textContent = data.timezone
            document.getElementById("grados").textContent = Math.floor(data.current.temp) + "°C"
            document.getElementById("estado").textContent = "Viento: " + (data.current.wind_speed) + " m/s"
            document.getElementById("humedad").textContent = "Humedad: " + Math.floor(data.current.humidity) + "%"
            document.getElementById("estado2").textContent = "Estado: " + capitalizeFirstLetter(data.current.weather[0].description)
            document.getElementById("Max").textContent = "Max: " + Math.floor(data.daily[0].temp.max) + "°C" + " Min: " + Math.floor(data.daily[0].temp.min) + "°C"

            map(lat, long)
            dailyapicall(lat, long)

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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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


function dailyapicall(lat, long) {
    console.log(endpoint1)
    var links = new URL(endpoint1)

    var params = { lang: "es", lat: lat, lon: long, appid: "3d070b4fd285e9dfa261851a42575fbe", units: "metric" }
    links.search = new URLSearchParams(params).toString();
    fetch(links)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data)


        })
        .catch(error => {
            console.log(error)
        })

}