/*
Animation for searching succeed.
*/
function successAnimate() {
    $("#logo2").remove();
    $("#messagebox").text("");
    $("#author").fadeOut(300, function() { $(this).remove(); });;
    $("#welcomemask").fadeOut(300, function() { $(this).remove(); });;
    $("#apptitle").fadeOut(300, function() { $(this).remove(); });;
    $("footer").fadeOut(300, function() { $(this).remove(); });;
    $("#subtitle").fadeOut(300, function() { $(this).remove(); });;
    $("#floating-panel").animate({
        position: 'absolute',
        fontSize: '15px',
        right: '0',
        height: '70px',
        width: '400px',
        margin: '0',
    });
    $(".input-group").animate({
        margin: '10px',
    });
    $("#logo").animate({
        margin: '10px',
        width: '36px',
        height: '36px',
    });
    $("#floating-panel").addClass("floatingsucceed");
    $("#logo").addClass("logosucceed");
    $("#messagebox").addClass("messageboxsucceed");
    
}
/*
Map marker with info window for searching succeed.
*/
function successPlaceInfo(map, place, marker, infowindow) {
    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
    } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
    }
    
    marker.setIcon(({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
        address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
}

/*
Map initilization.
*/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 13
    });
    var input = (document.getElementById('pac-input'));

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    //autocomplete.setTypes(['address']);
    
    
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });
    
    var place = undefined;

    var service = new google.maps.places.PlacesService(map);
    document.getElementById('submit').addEventListener('click', function() {
        var input = document.getElementById('pac-input').value;
        var request = {
            query   :  input
        };
        
        service.textSearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                var place = results[0];
                successAnimate();
                successPlaceInfo(map, place, marker, infowindow);
            } else {
                $("#messagebox").text("No result found.");
            }
        });
    });
    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            $("#messagebox").text("No result found.");
            return;
        }
        successAnimate();
        // If the place has a geometry, then present it on a map.
        successPlaceInfo(map, place, marker, infowindow); 
    });
}

