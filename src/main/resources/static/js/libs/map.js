define(['googlemaps!'],function(gmaps){
	return {
		mapStart: function(){
			//center Washspeed Tân An
			TanAn=new gmaps.LatLng(10.534907, 106.4087704);
			//other Washspeed Bến Tre
			BenTre=new gmaps.LatLng(10.2418703, 106.3745495);
			  var mapOptions= {
			    center: TanAn,
			    zoom:9, scrollwheel: false, draggable: false,
			    mapTypeId:gmaps.MapTypeId.ROADMAP
			  };
			  var map=new gmaps.Map(document.getElementById("googleMap"),mapOptions);

			  var markerTanAn = new gmaps.Marker({
			    position: TanAn,
			    label: "Washspeed Tân An",
			    title: "Washspeed Tân An"
			  });
			  markerTanAn.setMap(map);
			  markerTanAn.addListener('click', function() {
		          map.setZoom(16);
		          map.setCenter(markerTanAn.getPosition());
		          window.setTimeout(function() {
		              map.setZoom(9);
		            }, 3000);
		        });

			  var markerBenTre = new gmaps.Marker({
				    position: BenTre,
				    label: "Washspeed Bến Tre",
				    title: "Washspeed Bến Tre"
				  });
			  markerBenTre.setMap(map);
			  markerBenTre.addListener('click', function() {
		          map.setZoom(16);
		          map.setCenter(markerBenTre.getPosition());
		          window.setTimeout(function() {
		        	  map.setCenter(markerTanAn.getPosition());
		              map.setZoom(9);
		            }, 3000);
		        });
		}
	}
})


