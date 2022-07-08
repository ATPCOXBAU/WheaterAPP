
const endpoint = "http://api.openweathermap.org/"
const urlprueba = "https://api.openweathermap.org/data/2.5/onecall?lat=19.4285&lon=-99.1277&exclude=daily&appid=3d070b4fd285e9dfa261851a42575fbe&units=imperial"


function apicall() {
    fetch(urlprueba)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
}