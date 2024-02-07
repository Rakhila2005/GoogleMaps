async function initMap() {
    const mapOptions = {
        center: { lat: 51.13964452706329, lng: 71.41295548831049 },
        zoom: 15
    };

    // Create a new map instance
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: { lat: 51.13964452706329, lng: 71.41295548831049 },
        map: map,
        title: 'Nurly Orda'
    });
}