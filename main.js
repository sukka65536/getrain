window.onload = function () {
    navigator.geolocation.getCurrentPosition(getNearStations);

    function getNearStations(position) {
        document.getElementById('out1').innerHTML = "x:" + position.coords.longitude;
        document.getElementById('out2').innerHTML = "y:" + position.coords.latitude;
        const x = position.coords.longitude;
        const y = position.coords.latitude;
        document.getElementById('out3').innerHTML = callGetStationsAPI(x, y);
    }
}

async function callGetStationsAPI(x, y) {
    const res = await fetch("https://express.heartrails.com/api/json?method=getStations&x=" + x + "&y=" + y);
    return await res.json();
};