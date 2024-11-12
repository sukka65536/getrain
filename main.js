window.onload = function () {
    let isFirstGet = true;
    document.getElementById("get-location").addEventListener("click", function() {
        if (isFirstGet) {
            isFirstGet = false;
            this.innerHTML = "位置情報を更新";
        }
        navigator.geolocation.getCurrentPosition(getNearStations);
    });
}

function getNearStations(position) {
    const x = position.coords.longitude;
    const y = position.coords.latitude;
    //callGetStationsAPI(141.5968, 42.6397);
    callGetStationsAPI(x, y);
}

function callGetStationsAPI(x, y) {
    const url = "https://express.heartrails.com/api/json?method=getStations&x=" + x + "&y=" + y;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            displayResult(result);
        })
        .catch((e) => {
            console.log(e);
        })
};

function displayResult(result) {
    document.getElementById("result").innerHTML = "";
    result.response.station.forEach(s => {
        createItem(s.name, s.line, s.distance);
    });
}

function createItem(name, line, distance) {
    const item = `
    <div class="result-item">
        <div class="result-item-upper">
            <div class="result-item-info">
                <div class="result-item-name">${name}</div>
                <div class="result-item-line">${line}</div>
            </div>
            <div class="result-item-distance">${distance}</div>
        </div>
        <div class="result-item-lower">
        </div>
    </div>
    `
    document.getElementById("result").innerHTML += item;
}

console.log("Copyright (C) 2006 - 2021 HeartRails Inc. Some Rights Reserved.\n"
    + "https://www.heartrails.com/");