window.onload = function () {
    navigator.geolocation.getCurrentPosition(getNearStations);

    function getNearStations(position) {
        document.getElementById('out1').innerHTML = "x:" + position.coords.longitude;
        document.getElementById('out2').innerHTML = "y:" + position.coords.latitude;
        const x = position.coords.longitude;
        const y = position.coords.latitude;
        callGetStationsAPI(x, y);
    }
}

function callGetStationsAPI(x, y) {
    const url = "https://express.heartrails.com/api/json?method=getStations&x=" + x + "&y=" + y;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            example(result);
        })
        .catch((e) => {
            console.log(e)
        })
};

function example(r) {
    document.getElementById('out3').innerHTML = JSON.stringify(r);
}