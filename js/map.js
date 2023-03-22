function initMap() {
    const pos = {lat: 56.9875311, lng: 24.1198237}

    const opt = {
        center: pos,
        zoom: 17
    }

    let map = new google.maps.Map(document.getElementById("map"), opt)

    const marker = new google.maps.Marker({
        position: pos,
        icon: "img/Marker.svg",
        map: map,
        title: "hello",
    })

    map.setOptions({ streetViewControl: false });

    map.setOptions({ });
}

window.initMap = initMap;

