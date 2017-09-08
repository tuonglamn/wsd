define(function(){
	
	var setCarouselInterval = function(interval){
		$('.carousel').carousel({
			  interval: interval
			})
	};

	var initTooltip = function(){
		$('[data-toggle="tooltip"]').tooltip();
	};
	
	var addSmoothSrolling = function(){
		// Add smooth scrolling to all links in navbar + footer link
		  $(".navbar a, footer a[href='#top']").on('click', function(event) {
		  var href = event.currentTarget.href;

		  // Make sure this.hash has a value before overriding default behavior
		  if (this.hash !== "") {

		    // Prevent default anchor click behavior
		    event.preventDefault();

		    // Store hash
		    var hash = this.hash;

		    // Using jQuery's animate() method to add smooth page scroll
		    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		    
		    
		    try {
		    	$('html, body').animate({
				      scrollTop: $(hash).offset().top
				    }, 900, function(){

				      // Add hash (#) to URL when done scrolling (default click behavior)
				      window.location.hash = hash;
				      });
		    } catch (err){
		    	window.location.href = href;
		    }
		    
		    } // End if
		  });
	};
	
    return {
    	init: function(){
    		setCarouselInterval(12000);
    		addSmoothSrolling();
    		initTooltip();
    	}
    };
})