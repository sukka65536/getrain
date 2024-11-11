window.onload = function () {
    navigator.geolocation.getCurrentPosition(test);

    function test(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }
}