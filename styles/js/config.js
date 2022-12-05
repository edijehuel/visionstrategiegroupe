var CONFIG = (function ($, window) {
	
	return {
		
		
		/* ---------------------------------------------------- */
		/*	Owl Slider										    */
		/* ---------------------------------------------------- */
		
		partner_slider : {
			items: 5,					
			autoplay : true,			
			autoplayTimeout: 5000,		
			smartSpeed: 1200,			
			navigation: false,			
  			rewindNav: false,			
  			loop: true,					
			theme: "carousel-theme",
			dots: false,				
			nav: false,					
			margin:20,
			autoplayHoverPause: true,
			responsive:{
				320: {
				   items:1
				},
				480: {
				   items: 1
				},	
			    769:{
			      items:5
			    },
			    1199:{
			      items:5
			    }
			}
		},

	}
	
}(jQuery, window));
	
	