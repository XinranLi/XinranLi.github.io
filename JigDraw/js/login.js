jQuery(function($){			
				$.supersized({				
					// Functionality
					slide_interval          :   2000,		// Length between transitions
					transition              :   3, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	700,		// Speed of transition
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					:  	[			// Slideshow Images
														{image : 'picture/bg2.jpg', thumb : 'picture/bg2.jpg', url : 'picture/bg2.jpg'},
														{image : 'picture/background.jpg', title : 'Image Credit', thumb : 'picture/background.jpg', url : 'picture/background.jpg'},
                    {image : 'picture/background2.jpg', title : 'Image Credit', thumb : 'picture/background2.jpg', url : 'picture/background2.jpg'}]
					
				});
		    });  