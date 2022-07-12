
const endpoint = "http://api.openweathermap.org/"
const urlprueba = "https://api.openweathermap.org/data/2.5/onecall?lat=19.4285&lon=-99.1277&exclude=daily&appid=3d070b4fd285e9dfa261851a42575fbe&units=imperial"




window.onload = function () {


    var width = 3;
    var styles = [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'white',
                width: width + 2
            })
        }),
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'blue',
                width: width
            })
        })
    ];
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([-99.1277, 19.4285,]),
            zoom: 10
        })
    });

}




function apicall() {
    fetch(urlprueba)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data)
            console.log(data.current.temp)

        })
        .catch(error => {
            console.log(error)
        })
}


function getlat() {
    let valor1 = prompt("Ingresa Tu Latitud", 0);
    console.log(valor1)
    let valor2 = prompt("Ingresa Tu Longitud", 0);


}

