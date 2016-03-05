function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('pac-input').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        /*
        $("#messagebox").text("");
        $("#author").remove();
        $("#welcomemask").remove();
        $("#apptitle").remove();
        $("footer").remove();
        $("#floating-panel").animate({
            position: 'absolute',
            fontSize: '15px',
            right: '0',
            height: '50px',
            width: '400px',
            margin: '0',
        });
        $("#logo").animate({
            margin: '10px',
            width: '36px',
            height: '36px',
            });
        */
      } else {
        $("#messagebox").text("*Error: Invalid Search Value:" + status);
          }
        });
      }