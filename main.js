window.onload = function () {
    navigator.geolocation.getCurrentPosition(test);

    function test(position) {
        document.getElementById('out1').innerHTML = position.coords.latitude;
        document.getElementById('out2').innerHTML = position.coords.longitude;
    }
}