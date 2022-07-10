
const endpoint = "http://api.openweathermap.org/"
const urlprueba = "https://api.openweathermap.org/data/2.5/onecall?lat=19.4285&lon=-99.1277&exclude=daily&appid=3d070b4fd285e9dfa261851a42575fbe&units=imperial"
/*


F7EBD4


#F6A90E

 
#559C54

 
#990A94

 
#0B330A
*/

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


function initMap() {

    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
window.initMap = initMap;

function load() {
    alert("evento load detectado!");
    initMap();
}
window.onload = load;