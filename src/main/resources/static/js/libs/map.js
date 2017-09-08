define(['googlemaps!', 'lodash'],function(gmaps, _){
	
	function newPost(x, y){
		return new gmaps.LatLng(x,y );
	}
	
	function newMarker(map, post, label, title){
		marker = new gmaps.Marker({
		    position: post,
		    label: label,
		    title: title
		  }); 
		marker.setMap(map);
		return marker;
	}
	
	return {
		mapStart: function() {
			  //center Washspeed Tân An
			  var TanAn = newPost(10.534907, 106.4087704);
			  //other Washspeed Bến Tre
			  var BenTre = newPost(10.2418703, 106.3745495);
			  //center map
			  var centerPos = TanAn;
			  var mapOptions= {
			    center: TanAn,	  
				zoom:9, scrollwheel: false, draggable: false,
				mapTypeId:gmaps.MapTypeId.ROADMAP
		      };
			  var map = new gmaps.Map(document.getElementById("googleMap"), mapOptions);
			  var markerTanAn = newMarker(map, TanAn, "Washspeed Tân An", "Washspeed Tân An"); 
			  markerTanAn.addListener('click', function() {
			          map.setZoom(16);
			          map.setCenter(markerTanAn.getPosition());
			          window.setTimeout(function() {
			        	  map.setCenter(centerPos);
			              map.setZoom(9);
			            }, 3000);
			        });
			  var markerBenTre = newMarker(map, BenTre, "Washspeed Bến Tre", "Washspeed Bến Tre");
			  markerBenTre.addListener('click', function() {
		          map.setZoom(16);
		          map.setCenter(markerBenTre.getPosition());
		          window.setTimeout(function() {
		        	  map.setCenter(centerPos);
		              map.setZoom(9);
		            }, 3000);
		        });
			}
		}
})


